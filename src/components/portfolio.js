import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title="">
                    <img alt="" src="images/portfolio/maze.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Maze Solver System Using AI Algorithms</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus"></i></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title="">
                    <img alt="" src="images/portfolio/farm-management.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Farm Management System</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus"></i></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title="">
                    <img alt="" src="images/portfolio/smart-shopping.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Smart Shopping System</h5>
                        <p>Internet Of Things</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus"></i></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/maze.jpg" alt="" />
            <div className="description-box">
              <h4>Maze Solver System Using AI Algorithms</h4>
              <p>A Maze Solving System Using Reactjs and Machine Learning where Maze solving is the act of finding a route through the maze from start to finish. We used  AI algorithm like A-Star  DFS  and BFS algorithms.</p>
              <span className="categories"><i className="fa fa-tag"></i>Branding, Webdevelopment</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/farm-management.jpg" alt="" />
            <div className="description-box">
              <h4>Farm Management System</h4>
              <p>Farming software designed to help you execute your production and crop marketing decisions</p>
              <span className="categories"><i className="fa fa-tag"></i>Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/smart-shopping.jpg" alt="" />
            <div className="description-box">
              <h4>Smart Shopping System</h4>
              <p>The aim of this project is to develop a smart shopping cart using arduino and mobile application for smart
                shopping.In this system user put their product on the cart and scan the product by mobile application then
                that product automatically drop inside that cart and that product will add in mobile bill.</p>
              <span className="categories"><i className="fa fa-tag"></i>Internet Of Things</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Jay341997/SmartShoppingSystem" target="_blank">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
