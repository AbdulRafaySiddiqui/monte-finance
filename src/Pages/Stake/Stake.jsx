import React, { useState, useEffect } from 'react'
import logo from "./../images/monte-finance-01.png";
import smallLogo from "./../images/artboard-color-small.svg";
import { Link } from 'react-router-dom'
import "./../css/components.css"
import "./../css/normalize.css"
import "./../css/zzz-ff9a17.css"
import "./Stake.css"
import { TextField } from '@material-ui/core';
import styled from 'styled-components'

import { useWallet } from 'use-wallet'
import Web3 from 'web3';
import tokenABI from './../../contractABI/token.json'
import stakingABI from './../../contractABI/staking.json'

const TOKEN_ADDRESS = '0x9ac37707249A5EbC9768349A742dF668A7DA60c5';
const STAKE_ADDRESS = '0x1B1b9E0774d3353772040a5b5500BAe55b377Cc2';

const StyledTextField = styled(TextField)`
    & .MuiInput-underline:after {
        border-bottom: 2px solid #E1B788;
    }

`;
const Stake = () => {
  const [isStake, setIsStake] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);

  const [stakeAmount, setStakeAmount] = useState('');
  const [unstakeAmount, setUnstakeAmount] = useState('');

  const [stakeAmountError, setStakeAmountError] = useState(null);
  const [unstakeAmountError, setUnstakeAmountError] = useState(null);

  const [maxStake, setMaxStake] = useState(false);
  const [maxUnstake, setMaxUnstake] = useState(false);

  const [summary, setSummary] = useState({
    rewards: 0,
    walletBalance: 0,
    stakedAmount: 0,
    totalStaked: 0,
    totalStakers: 0,
    ethDistributed: 0,
    totalSupply: 0
  });

  const wallet = useWallet();

  useEffect(() => {
    if (wallet.status === 'connected') {
      setWeb3(new Web3(wallet.ethereum));
      loadSummary(new Web3(wallet.ethereum));
    }
  }, [wallet]);


  const loadSummary = async (ethereum) => {
    setIsLoading(true);

    const token = new ethereum.eth.Contract(tokenABI, TOKEN_ADDRESS);
    const stake = new ethereum.eth.Contract(stakingABI, STAKE_ADDRESS);

    const data = { rewards: 0, walletBalance: 0, stakedAmount: 0, totalStaked: 0, totalStakers: 0, ethDistributed: 0, totalSupply: 0 };
    data.walletBalance = await token.methods.balanceOf(wallet.account).call();
    data.totalSupply = await token.methods.totalSupply().call();
    data.stakedAmount = await stake.methods.stakeValue(wallet.account).call();
    data.totalStaked = await stake.methods.totalStaked().call();
    data.totalStakers = await stake.methods.totalStakers().call();
    data.rewards = await stake.methods.dividendsOf(wallet.account).call();
    data.ethDistributed = await stake.methods.totalDistributions().call();

    setSummary(data);

    setIsLoading(false);
  }

  const stake = () => {
    let amount;
    if (maxStake) {
      amount = summary.walletBalance;
    } else {
      amount = web3.utils.toWei(stakeAmount);
    }

    if (parseFloat(amount) > parseFloat(summary.walletBalance)) return;

    setIsStaking(true);

    const stake = new web3.eth.Contract(stakingABI, STAKE_ADDRESS);

    stake.methods.stake(amount).send({ from: wallet.account })
      .on('transactionHash', function (hash) {
        console.log(hash)
      })
      .on('confirmation', function (confirmationNumber, receipt) {
        setIsStaking(false);
      })
      .on('error', function (error) {
        setIsStaking(false);
        if (!error.toString().includes("-32601")) {
          if (error.message) {
            return setError(error.message);
          }
          setError(error)
        }
      })
      .catch((error) => {
        setIsStaking(false);
        if (!error.toString().includes("-32601")) {
          if (error.message) {
            return setError(error.message)
          }
          setError(error)
        }
      });
  }

  const unstake = () => {
    let amount;
    if (maxUnstake) {
      console.log("max")
      amount = summary.totalStaked;
    } else {
      amount = web3.utils.toWei(unstakeAmount);
    }

    if (parseFloat(amount) > parseFloat(summary.totalStaked)) return;

    setIsUnstaking(true);

    const stake = new web3.eth.Contract(stakingABI, STAKE_ADDRESS);

    stake.methods.unstake(amount).send({ from: wallet.account })
      .on('transactionHash', function (hash) {
        console.log(hash)
      })
      .on('confirmation', function (confirmationNumber, receipt) {
        setIsUnstaking(false);
      })
      .on('error', function (error) {
        setIsUnstaking(false);
        if (!error.toString().includes("-32601")) {
          if (error.message) {
            return setError(error.message);
          }
          setError(error)
        }
      })
      .catch((error) => {
        setIsUnstaking(false);
        if (!error.toString().includes("-32601")) {
          if (error.message) {
            return setError(error.message)
          }
          setError(error)
        }
      });
  }

  const withdraw = () => {
    if (summary.rewards > 0) {

      setIsWithdrawing(true);

      const stake = new web3.eth.Contract(stakingABI, STAKE_ADDRESS);

      stake.methods.withdraw(summary.rewards).send({ from: wallet.account })
        .on('transactionHash', function (hash) {
          console.log(hash)
        })
        .on('confirmation', function (confirmationNumber, receipt) {
          setIsWithdrawing(false);
        })
        .on('error', function (error) {
          setIsWithdrawing(false);
          if (!error.toString().includes("-32601")) {
            if (error.message) {
              return setError(error.message);
            }
            setError(error)
          }
        })
        .catch((error) => {
          setIsWithdrawing(false);
          if (!error.toString().includes("-32601")) {
            if (error.message) {
              return setError(error.message)
            }
            setError(error)
          }
        });
    }
  }

  const onStakeAmountChange = (event) => {
    setMaxStake(false);
    const amount = event.target.value;
    setStakeAmount(amount ?? 0);
    if (!amount || amount === '' || amount === '0') return;
    const { walletBalance } = summary;
    if (parseFloat(web3.utils.toWei(amount)) > walletBalance)
      setStakeAmountError("Invalid Amount!");
    else
      setStakeAmountError(null);
  }

  const onUnstakeAmountChange = (event) => {
    setMaxUnstake(false);
    const amount = event.target.value;
    setUnstakeAmount(amount ?? '0');
    if (!amount || amount === '' || amount === '0') return;
    const { stakedAmount } = summary;
    if (parseFloat(web3.utils.toWei(amount)) > stakedAmount)
      setUnstakeAmountError("Invalid Amount!");
    else
      setUnstakeAmountError(null);
  }

  const selectMaxSelect = () => {
    if (isStake) {
      setStakeAmount(displayValue(summary.walletBalance))
      setStakeAmountError(null);
      setMaxStake(true);
    } else {
      setUnstakeAmount(displayValue(summary.stakedAmount))
      setUnstakeAmountError(null);
      setMaxUnstake(true);
    }
  }

  const displayValue = (amount, decimals = 2) => {
    if (web3 === null)
      return 0;

    return parseFloat(web3.utils.fromWei(amount.toString(), "ether")).toFixed(decimals);
  }

  return (
    <div className="body">
      <div className="app-layout">
        <div className="app-nav-layout">
          <div data-collapse="medium" data-animation="over-left" data-duration="400" data-easing="ease-in-out" data-easing2="ease-in-out" role="banner" className="sidebar-navbar w-nav">
            <div className="sidebar-navbar-container w-container">
              <div className="sidebar-navbar-heading">
                <div className="sidebar-navbar-menu-button w-nav-button"></div>
                <a href="http://www.montefinance.com" className="sidebar-navbar-brand w-nav-brand"><img src={logo} height="100" alt="" className="sidebar-navbar-brand-logo" /><img src={smallLogo} height="20" alt="" className="sidebar-navbar-brand-logo-small" /></a>
              </div>
              <nav role="navigation" className="sidebar-navbar-menu w-nav-menu">
                <div className="sidebar-navbar-body">
                  <div className="sidebar-navbar-body-container">
                    <Link to="/"><p className="sidebar-navbar-link link-home w-nav-link">Home</p></Link>
                    {/* <a href="../index.html" className="sidebar-navbar-link link-home w-nav-link">Home<br></br></a> */}
                    <Link to="/stake"><p className="sidebar-navbar-link w-nav-link w--current">Dashboard</p></Link>
                    {/* <a href="../dashboards/staking.html" aria-current="page" className="sidebar-navbar-link w-nav-link w--current">Dashboard<br></br></a> */}
                    <a href="../projects.html" className="sidebar-navbar-link link-projects w-nav-link">Projects</a>
                  </div>
                </div>
                <div className="sidebar-navbar-footer">
                  <a href="../style-guide.html" className="sidebar-navbar-link link-help w-nav-link">Help</a>
                  <a href="http://medium.com" target="_blank" className="sidebar-navbar-link link-contacts w-nav-link">Learn More</a>
                </div>
                <div className="sidebar-navbar-footer nav-toggle">
                  <a data-w-id="c953acc7-394f-2eba-e671-0dd464d91c76" href="http://www.montefinance.com" target="_blank" className="sidebar-navbar-toggle-button w-button"></a>
                </div>
              </nav>
            </div>
          </div>
          <div className="app-navbar-container">
            <div className="app-navbar-menu">
              <a href="http://www.montefinance.com" className="button-2 w-button">Home</a>
              <a href="https://t.me/MonteFinance" className="button-2 w-button">Telegram</a>
              <a href="https://twitter.com/financemonte" className="button-2 w-button">Twitter</a>
            </div>
          </div>
        </div>
        <div className="app-main-layout-container">
          <div className="app-main-layout-mask"></div>
          <div className="app-main-layout">
            <div className="app-main-layout-header">
              <div className="app-main-layout-wrapper header">
                <div className="page-heading">
                  <h2>Dashboard</h2>
                  <button
                    disabled={wallet.status === 'connected' ? true : false}
                    onClick={() => wallet.connect()}>{
                      wallet.status === 'connected' ?
                        wallet.account.substring(0, 10) + '...'
                        : "METAMASK"}
                  </button>
                  {
                    isLoading ?
                      <p>LOADING....</p> :
                      isWithdrawing ?
                        <p>WITHDRAWING....</p>
                        : isStaking ?
                          <p>STAKING....</p>
                          : isUnstaking ?
                            <p>UNSTAKING....</p> : <p></p>
                  }
                </div>
                <div className="page-tabs-menu">
                  {/* <a href="../dashboards/staking.html" aria-current="page" className="page-tab-link traffic w--current">Staking</a> */}
                  {/* <a href="../dashboards/total.html" className="page-tab-link revenue">Total (Coming Soon)</a> */}
                </div>
              </div>
            </div>
            <div className="app-main-layout-wrapper">
              {
                wallet.status === 'connected' ?
                  <div className="app-main-layout-content">
                    <div className="page-tabs-content">
                      <div className="card text-center">
                        <div className="card-heading center">
                          <div className="caption mb-0">rewards</div>
                        </div>
                        {/* <div className="key-price-value">545,607.03</div> */}
                        {/* <TextField label="Enter Amount"/> */}
                        {/* <Input type="number" placeholder="Enter Amount"></Input> */}
                        <h3>{displayValue(summary.rewards, 18)} ETH</h3>
                        <a href="#" className="button-5 w-button" onClick={withdraw}>Withdraw</a>
                        {/* <a href="#" className="button-5 w-button">Reinvest</a> */}
                      </div>
                      <br />

                      {/* SUMMARY */}

                      <div className="section">
                        <div className="flex row w-row">
                          <div className="col w-col w-col-4">
                            <div className="card text-center">
                              <div className="card-heading center">
                                <div className="caption mb-0">Your Staked MNT</div>
                              </div>
                              <div className="key-price-value">{displayValue(summary.stakedAmount)}</div>
                            </div>
                          </div>
                          <div className="col w-col w-col-4">
                            <div className="card text-center">
                              <div className="card-heading center">
                                <div className="caption mb-0">Your MNT Wallet</div>
                              </div>
                              <div className="key-price-value">{displayValue(summary.walletBalance)}</div>
                            </div>
                          </div>
                          <div className="col w-col w-col-4">
                            <div className="card text-center">
                              <div className="card-heading center">
                                <div className="caption mb-0">eth distributed</div>
                              </div>
                              <div className="key-price-value">{displayValue(summary.ethDistributed)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="section">
                        <div className="flex row w-row">
                          <div className="col w-col w-col-4">
                            <div className="card text-center">
                              <div className="card-heading center">
                                <div className="caption mb-0">total mnt stakers</div>
                              </div>
                              <div className="key-price-value">{displayValue(summary.totalStakers)}</div><img src="../images/Chart-Metric.svg" width="400" alt="" className="single-data-image" />
                            </div>
                          </div>
                          <div className="col w-col w-col-4">
                            <div className="card text-center">
                              <div className="card-heading center">
                                <div className="caption mb-0">total staked mnt</div>
                              </div>
                              <div className="key-price-value">{displayValue(summary.totalStaked)}</div><img src="../images/Chart-Metric-Green.svg" width="400" alt="" className="single-data-image" />
                            </div>
                          </div>
                          <div className="col w-col w-col-4">
                            <div className="card text-center">
                              <div className="card-heading center">
                                <div className="caption mb-0">total mnt supply</div>
                              </div>
                              <div className="key-price-value">{displayValue(summary.totalSupply)}</div><img src="../images/Chart-Metric-Grey.svg" width="400" alt="" className="single-data-image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>

                        {/* STAKE / UNSTAKE  */}
                        {
                          isStake ?
                            <div className="col w-col w-col-4 visible-card">
                              <div className="card text-center">
                                {/* <div className="column-3 w-col w-col-4">
                            <a href="#" className="button-3 w-button">Unstake</a>
                        </div>  */}
                                <p className="boldHeading">STAKE MNT</p>
                                <StyledTextField
                                  id='value'
                                  className="amount-input"
                                  placeholder="Enter amount"
                                  onChange={onStakeAmountChange}
                                  value={stakeAmount}
                                  error={stakeAmountError}></StyledTextField>
                                <div className="toggle-stake stake" onClick={stake}>STAKE</div>
                                <div className="toggle-stake unstake" onClick={selectMaxSelect}>MAX</div>
                              </div>
                            </div>
                            : <div className="col w-col w-col-4 visible-card">
                              <div className="card text-center">
                                <p className="boldHeading">UNSTAKE MNT</p>
                                <StyledTextField
                                  id='value'
                                  className="amount-input"
                                  placeholder="Enter amount"
                                  onChange={onUnstakeAmountChange}
                                  value={unstakeAmount}
                                  error={unstakeAmountError}></StyledTextField>
                                <div className="toggle-stake stake" onClick={unstake}>UNSTAKE</div>
                                <div className="toggle-stake unstake" onClick={selectMaxSelect}>MAX</div>
                              </div>
                            </div>
                        }


                        <div className="w-row">
                          <div className="column-2 w-col w-col-4">
                            <a id="stake-id" onClick={(e) => setIsStake(true)} className="button-3 w-button">Stake</a>
                          </div>
                          <div className="column-3 w-col w-col-4">
                            <a id="unstake-id" onClick={(e) => setIsStake(false)} className="button-3 w-button">Unstake</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div className="app-main-layout-content">
                    <div className="page-tabs-content">
                      <div className="card text-center">
                        <div className="card-heading center">
                          <div className="caption mb-0">Please connect your wallet to use the Dapp</div>
                        </div>
                      </div>
                    </div>
                  </div>
              }

              {/* FOOTER */}
              <div className="footer">
                <div className="w-row">
                  <div className="w-col w-col-6">
                    <div className="hint">© Copyright Monte Finance 2021</div>
                  </div>
                  <div className="footer-right w-col w-col-6">
                    <div className="hint">
                      <a href="http://www.montefinance.com" target="_blank" className="footer-link">Monte Finance 2021</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6034587d924053386f0cc996" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <script src="../js/zzz-ff9a17.js" type="text/javascript"></script>
    </div>
  )
}


export default Stake
