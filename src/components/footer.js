import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://github.com/manthanghori" target="_blank"><i className="fa fa-github"></i></a></li>
              <li><a href="https://github.com/manthanghori" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright 2014 CeeVee</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
