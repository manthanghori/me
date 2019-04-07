import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://github.com/Jay341997" target="_blank"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/jay-patel-b83b97126/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright 2014 CeeVee</li>
              <li>Design by <a href="http://www.styleshout.com/" title="Styleshout" target="_blank">Jay</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
