import  React, {Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./../css/components.css"
import "./../css/normalize.css"
import "./../css/zzz-ff9a17.css"
import "./Stake.css"
// import Input from '@material-ui/core/Input';
import Unstaking from '../../Components/Unstaking/Unstaking'
import Staking from './../../Components/Staking/Staking';
import { CircleLoader } from "react-spinners"



const Stake = () => {
  const [unstake, setUnstake] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoader(false)}, 700);
  }, [ ])
  
  return (
      <Fragment>
        {loader && <CircleLoader className="css-l4r88c dashboard-loader" size={44} color="chocolate"/>}

        {!loader && 
        <div className="body">
            <div className="app-layout">
    <div className="app-nav-layout">
      <div data-collapse="medium" data-animation="over-left" data-duration="400" data-easing="ease-in-out" data-easing2="ease-in-out" role="banner" className="sidebar-navbar w-nav">
        <div className="sidebar-navbar-container w-container">
          <div className="sidebar-navbar-heading">
            <div className="sidebar-navbar-menu-button w-nav-button"></div>
            <a href="http://www.montefinance.com" className="sidebar-navbar-brand w-nav-brand"><img src="../images/monte-finance-01.png" height="100" alt="" className="sidebar-navbar-brand-logo"/><img src="../images/artboard-color-small.svg" height="20" alt="" className="sidebar-navbar-brand-logo-small"/></a>
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
              <h2>Staking Dashboard</h2>
            </div>
            <div className="page-tabs-menu">
              {/* <a href="../dashboards/staking.html" aria-current="page" className="page-tab-link traffic w--current">Staking</a> */}
              {/* <a href="../dashboards/total.html" className="page-tab-link revenue">Total (Coming Soon)</a> */}
            </div>
          </div>
        </div>
        <div className="app-main-layout-wrapper">
          <div className="app-main-layout-content">
            <div className="page-tabs-content">
            <div className="card text-center">
                <div className="card-heading center">
                  <div className="caption mb-0">rewards</div>
                </div>
                {/* <div className="key-price-value">545,607.03</div> */}
                {/* <TextField label="Enter Amount"/> */}
                {/* <Input type="number" placeholder="Enter Amount"></Input> */}
                <h3>555,555,555</h3>
                <a href="#" className="button-5 w-button">Withdraw</a>
                {/* <a href="#" className="button-5 w-button">Reinvest</a> */}
              </div>
              <br/>
              <div className="section">
                <div className="flex row w-row">
                  <div className="col w-col w-col-4">
                    <div className="card text-center">
                      <div className="card-heading center">
                        <div className="caption mb-0">Your Staked PNL</div>
                      </div>
                      <div className="key-price-value">10,000</div>
                    </div>
                  </div>
                  <div className="col w-col w-col-4">
                    <div className="card text-center">
                      <div className="card-heading center">
                        <div className="caption mb-0">Your PNL Wallet</div>
                      </div>
                      <div className="key-price-value">76,400</div>
                    </div>
                  </div>
                  <div className="col w-col w-col-4">
                    <div className="card text-center">
                      <div className="card-heading center">
                        <div className="caption mb-0">eth price (usd)</div>
                      </div>
                      <div className="key-price-value">1700</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="flex row w-row">
                  <div className="col w-col w-col-4">
                    <div className="card text-center">
                      <div className="card-heading center">
                        <div className="caption mb-0">total pnl stakers</div>
                      </div>
                      <div className="key-price-value">4</div><img src="../images/Chart-Metric.svg" width="400" alt="" className="single-data-image"/>
                    </div>
                  </div>
                  <div className="col w-col w-col-4">
                    <div className="card text-center">
                      <div className="card-heading center">
                        <div className="caption mb-0">total staked pnl</div>
                      </div>
                      <div className="key-price-value">545,607.03</div><img src="../images/Chart-Metric-Green.svg" width="400" alt="" className="single-data-image"/>
                    </div>
                  </div>
                  <div className="col w-col w-col-4">
                    <div className="card text-center">
                      <div className="card-heading center">
                        <div className="caption mb-0">total pnl supply</div>
                      </div>
                      <div className="key-price-value">0</div><img src="../images/Chart-Metric-Grey.svg" width="400" alt="" className="single-data-image"/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              {/* 
              <div className="col w-col w-col-4 hidden-card">
                    <div className="card text-center">
                      <div className="card-heading center">
                        <div className="caption mb-0">Your Staked PNL</div>
                      </div>
                      <div className="key-price-value">10,000</div>
                    </div>
                  </div>

                  <div className="col w-col w-col-4 visible-card">
                    <div className="card text-center">
                        <p>STAKE PNL</p>
                        <Input className="amount-input" placeholder="Enter amount"></Input>
                        <div className="toggle-stake stake">STAKE</div>
                        <div className="toggle-stake unstake">UNSTAKE</div>
                    </div>
                  </div>
                */}
                {unstake ? <Unstaking/> : <Staking/>}
                

                <div className="w-row">
                  <div className="column-2 w-col w-col-4">
                    <a  id="stake-id" onClick={(e) => setUnstake(false)} className="button-3 w-button">Stake</a>
                  </div>
                  <div className="column-3 w-col w-col-4">
                    <a id="unstake-id" onClick={(e) => setUnstake(true)} className="button-3 w-button">Unstake</a>
                  </div> 
                  {/* <div className="column-4 w-col w-col-4">
                    <a href="#" className="button-4 w-button">Rewards</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
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
        }
      </Fragment>
    ) 
}


export default Stake
