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
            <h1 className="responsive-headline">Manthan Ghori</h1>
            <h3>I am an <span>Optimistic person</span>, intrested to know what are  happening around the globe, <span>Eager to learn </span> new things and always ready to deliver them with others, also ready for new challenges, getting more focused, valued, practical.. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://github.com/manthanghori" target="_blank"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/manthan-ghori-5911131b1" target="_blank"><i className="fa fa-linkedin"></i></a></li>
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
