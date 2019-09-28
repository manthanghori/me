import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App"><header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Jay Patel</h1>
            <h3>I'm a <span>Web Developer</span>, <span>Competitive Programmer</span> and <span>Technology Geek</span> creating awesome and
              effective visual web. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://github.com/Jay341997" target="_blank"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/jay-patel-b83b97126/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
      </div>
    );
  }
}

export default Header;
