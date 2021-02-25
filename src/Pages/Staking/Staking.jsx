import React from 'react'

const Stake = () => {
    return (
        <div className="body">
            <div class="app-layout">
    <div class="app-nav-layout">
      <div data-collapse="medium" data-animation="over-left" data-duration="400" data-easing="ease-in-out" data-easing2="ease-in-out" role="banner" class="sidebar-navbar w-nav">
        <div class="sidebar-navbar-container w-container">
          <div class="sidebar-navbar-heading">
            <div class="sidebar-navbar-menu-button w-nav-button"></div>
            <a href="http://www.montefinance.com" class="sidebar-navbar-brand w-nav-brand"><img src="../images/monte-finance-01.png" height="100" alt="" class="sidebar-navbar-brand-logo"><img src="../images/artboard-color-small.svg" height="20" alt="" class="sidebar-navbar-brand-logo-small"></a>
          </div>
          <nav role="navigation" class="sidebar-navbar-menu w-nav-menu">
            <div class="sidebar-navbar-body">
              <div class="sidebar-navbar-body-container">
                <a href="../index.html" class="sidebar-navbar-link link-home w-nav-link">Home<br></a>
                <a href="../dashboards/staking.html" aria-current="page" class="sidebar-navbar-link w-nav-link w--current">Dashboard<br></a>
                <a href="../projects.html" class="sidebar-navbar-link link-projects w-nav-link">Projects</a>
              </div>
            </div>
            <div class="sidebar-navbar-footer">
              <a href="../style-guide.html" class="sidebar-navbar-link link-help w-nav-link">Help</a>
              <a href="http://medium.com" target="_blank" class="sidebar-navbar-link link-contacts w-nav-link">Learn More</a>
            </div>
            <div class="sidebar-navbar-footer nav-toggle">
              <a data-w-id="c953acc7-394f-2eba-e671-0dd464d91c76" href="http://www.montefinance.com" target="_blank" class="sidebar-navbar-toggle-button w-button"></a>
            </div>
          </nav>
        </div>
      </div>
      <div class="app-navbar-container">
        <div class="app-navbar-menu">
          <a href="http://www.montefinance.com" class="button-2 w-button">Home</a>
          <a href="https://t.me/MonteFinance" class="button-2 w-button">Telegram</a>
          <a href="https://twitter.com/financemonte" class="button-2 w-button">Twitter</a>
        </div>
      </div>
    </div>
    <div class="app-main-layout-container">
      <div class="app-main-layout-mask"></div>
      <div class="app-main-layout">
        <div class="app-main-layout-header">
          <div class="app-main-layout-wrapper header">
            <div class="page-heading">
              <h2>Dashboard</h2>
            </div>
            <div class="page-tabs-menu">
              <a href="../dashboards/staking.html" aria-current="page" class="page-tab-link traffic w--current">Staking</a>
              <a href="../dashboards/total.html" class="page-tab-link revenue">Total (Coming Soon)</a>
            </div>
          </div>
        </div>
        <div class="app-main-layout-wrapper">
          <div class="app-main-layout-content">
            <div class="page-tabs-content">
              <div class="section">
                <div class="flex row w-row">
                  <div class="col w-col w-col-4">
                    <div class="card text-center">
                      <div class="card-heading center">
                        <div class="caption mb-0">Your Staked PNL</div>
                      </div>
                      <div class="key-price-value">10,000</div>
                    </div>
                  </div>
                  <div class="col w-col w-col-4">
                    <div class="card text-center">
                      <div class="card-heading center">
                        <div class="caption mb-0">Your PNL Wallet</div>
                      </div>
                      <div class="key-price-value">76,400</div>
                    </div>
                  </div>
                  <div class="col w-col w-col-4">
                    <div class="card text-center">
                      <div class="card-heading center">
                        <div class="caption mb-0">eth price (usd)</div>
                      </div>
                      <div class="key-price-value">1700</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section">
                <div class="flex row w-row">
                  <div class="col w-col w-col-4">
                    <div class="card text-center">
                      <div class="card-heading center">
                        <div class="caption mb-0">total pnl stakers</div>
                      </div>
                      <div class="key-price-value">4</div><img src="../images/Chart-Metric.svg" width="400" alt="" class="single-data-image">
                    </div>
                  </div>
                  <div class="col w-col w-col-4">
                    <div class="card text-center">
                      <div class="card-heading center">
                        <div class="caption mb-0">total staked pnl</div>
                      </div>
                      <div class="key-price-value">545,607.03</div><img src="../images/Chart-Metric-Green.svg" width="400" alt="" class="single-data-image">
                    </div>
                  </div>
                  <div class="col w-col w-col-4">
                    <div class="card text-center">
                      <div class="card-heading center">
                        <div class="caption mb-0">total pnl supply</div>
                      </div>
                      <div class="key-price-value">0</div><img src="../images/Chart-Metric-Grey.svg" width="400" alt="" class="single-data-image">
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="w-row">
                  <div class="column-2 w-col w-col-4">
                    <a href="#" class="button-3 w-button">Stake</a>
                  </div>
                  <div class="column-3 w-col w-col-4">
                    <a href="#" class="button-3 w-button">Unstake</a>
                  </div>
                  <div class="column-4 w-col w-col-4">
                    <a href="#" class="button-4 w-button">Rewards</a>
                  </div>
                </div>
              </div>
              <div class="card text-center">
                <div class="card-heading center">
                  <div class="caption mb-0">rewards</div>
                </div>
                <div class="key-price-value">545,607.03</div>
                <a href="#" class="button-5 w-button">Withdraw</a>
                <a href="#" class="button-5 w-button">Reinvest</a>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="w-row">
              <div class="w-col w-col-6">
                <div class="hint">© Copyright Monte Finance 2021</div>
              </div>
              <div class="footer-right w-col w-col-6">
                <div class="hint">
                  <a href="http://www.montefinance.com" target="_blank" class="footer-link">Monte Finance 2021</a>
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

export default Stake
