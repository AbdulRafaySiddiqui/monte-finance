// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import './uniswap/IUniswapV2Factory.sol';
import './uniswap/IUniswapV2Router01.sol';
import './uniswap/IUniswapV2Router02.sol';

import './IStaking.sol';

contract Monte is Ownable, ERC20 {
    using SafeMath for uint256;
    
    IUniswapV2Router02 public  uniswapV2Router;
    address public  uniswapV2Pair;

    address public stakingPool;
    uint256 public taxFee = 300;

    bool public isTaxActive;
    mapping(address => bool) public isTaxless;

    uint256 public minTokenBeforeSwap = 1e18;
    bool private inSwap;

    event SwapedTokenForEth(uint256 ethAmount, uint256 tokenAmount);

    modifier lockTheSwap {
        inSwap = true;
        _;
        inSwap = false;
    }

    constructor() ERC20("Monte.finance","MNT") public {
        uniswapV2Router = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
        uniswapV2Pair = IUniswapV2Factory(uniswapV2Router.factory())
            .createPair(address(this), uniswapV2Router.WETH());
        _mint(_msgSender(),10_000_000e18);
    }

    function setTaxActive(bool _value) external onlyOwner {
        isTaxActive = _value;
    }

    function setIsTaxless(bool _value) external onlyOwner {
        isTaxless[_msgSender()] = _value;
    }

    function setTaxFee(uint256 _taxFee) external onlyOwner {
        require(_taxFee > 0 && _taxFee <= 10, "MNT: Tax Fee out of range!");
        taxFee = _taxFee;
    }

    function setStakingPool(address _stakingPool) external onlyOwner  {
        stakingPool = _stakingPool;
    }

    function transferFrom(address sender, address recipient, uint amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        if(_msgSender() == stakingPool) return true;

        _approve(sender, _msgSender(), allowance(sender,_msgSender()).sub(amount, "ERC20: transfer amount exceeds allowance"));
        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal override {
        uint256 transferAmount = amount;
        if(isTaxActive && sender != stakingPool) {
            uint256 fee = amount.mul(taxFee).div(10_000);
            super._transfer(sender,address(this),fee);
            transferAmount = amount.sub(fee);
        }
        if(!inSwap){
            swapAndDistribute();
        }
        super._transfer(sender, recipient, transferAmount);
    }
  
    function swapAndDistribute() private lockTheSwap {
        uint256 tokenAmount = balanceOf(address(this));
        if(tokenAmount < minTokenBeforeSwap) return;

        uint256 ethAmount = address(this).balance;
        
        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = uniswapV2Router.WETH();

        _approve(address(this), address(uniswapV2Router), tokenAmount);

        uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount,
            0,
            path,
            address(this),
            block.timestamp
        );
        
        ethAmount = address(this).balance.sub(ethAmount);
        emit SwapedTokenForEth(tokenAmount,ethAmount);

        IStaking(stakingPool).distribute{value: address(this).balance}();
    }
}