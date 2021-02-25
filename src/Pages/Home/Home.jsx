import React from 'react'
import  nft_2_01  from "./../images/nft-2-01.jpg";
import "./../css/components.css"
import "./../css/normalize.css"
import "./../css/zzz-ff9a17.css"
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div classNameName="body">
            {/* <h1>home page</h1> */}
            <div className="app-layout">
    <div className="app-nav-layout">
      <div data-collapse="medium" data-animation="over-left" data-duration="400" data-easing="ease-in-out" data-easing2="ease-in-out" role="banner" className="sidebar-navbar w-nav">
        <div className="sidebar-navbar-container w-container">
          <div className="sidebar-navbar-heading">
            <div className="sidebar-navbar-menu-button w-nav-button"></div>
            <a href="http://www.montefinance.com" className="sidebar-navbar-brand w-nav-brand"><img src="{./../images/monte-finance-01.png}" height="100" alt="monte-finance-01" className="sidebar-navbar-brand-logo"/><img src="{./../images/artboard-color-small.svg}" height="20" alt="artboard-color-small" className="sidebar-navbar-brand-logo-small"/></a>
          </div>
          <nav role="navigation" className="sidebar-navbar-menu w-nav-menu">
            <div className="sidebar-navbar-body">
              <div className="sidebar-navbar-body-container">
                  <Link to="/"> <p aria-current="page" className="sidebar-navbar-link link-home w-nav-link w--current" >Home</p></Link>
                {/* <a href="index.html" aria-current="page" className="sidebar-navbar-link link-home w-nav-link w--current">Home<br/></a> */}
                <Link to="/stake"><p className="sidebar-navbar-link w-nav-link">Dashboard</p></Link>
                {/* <a href="dashboards/staking.html" className="sidebar-navbar-link w-nav-link">Dashboard<br/></a> */}
              </div>
            </div>
            <div className="sidebar-navbar-footer">
              <a href="style-guide.html" className="sidebar-navbar-link link-help w-nav-link">Help</a>
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
              <h2>Welcome to Monte Finance App</h2>
              <p className="mt-20 text-large">Our aim and vision is to create a passive income opportunity for holders<br/>to stake our native token and harvest ETH in return.</p>
            </div>
          </div>
        </div>
        <div className="app-main-layout-wrapper">
          <div className="app-main-layout-content">
            <div className="section-inner">
              <div className="card">
                <h4>Overview</h4>
                <p>Explanation about NFT Cards + Project</p>
              </div>
            </div>
            <div>
              <div className="w-row">
                <div className="w-col w-col-6"><img src="{./../images/nft-1-01.jpg}" loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 46vw, 36vw" srcset="images/nft-1-01-p-500.jpeg 500w, images/nft-1-01-p-800.jpeg 800w, images/nft-1-01-p-1080.jpeg 1080w, images/nft-1-01-p-1600.jpeg 1600w, images/nft-1-01-p-2000.jpeg 2000w, images/nft-1-01-p-2600.jpeg 2600w, images/nft-1-01.jpg 3125w" alt=""/></div>
                <div className="w-col w-col-6"><img src={nft_2_01} loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 46vw, 36vw" srcset="images/nft-2-01-p-500.jpeg 500w, images/nft-2-01-p-800.jpeg 800w, images/nft-2-01-p-1080.jpeg 1080w, images/nft-2-01-p-1600.jpeg 1600w, images/nft-2-01-p-2000.jpeg 2000w, images/nft-2-01-p-2600.jpeg 2600w, images/nft-2-01.jpg 3125w" alt="" className="image"/></div>
              </div>
              <div className="columns w-row">
                <div className="w-col w-col-6"><img src="{images/nft-gold-1.jpg} " loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 46vw, 36vw" srcset="images/nft-gold-1-p-500.jpeg 500w, images/nft-gold-1-p-800.jpeg 800w, images/nft-gold-1-p-1080.jpeg 1080w, images/nft-gold-1.jpg 1403w" alt=""/></div>
                <div className="w-col w-col-6"><img src="{images/nft-gold-2.jpg}" loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 46vw, 36vw" srcset="images/nft-gold-2-p-500.jpeg 500w, images/nft-gold-2-p-800.jpeg 800w, images/nft-gold-2-p-1080.jpeg 1080w, images/nft-gold-2.jpg 1403w" alt="" className="image"/></div>
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
        </div>
    )
}

export default Home
