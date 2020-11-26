import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/manthan.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am an optimistic person, intrested to know what are  happening around the globe, eager to learn new things and always ready to deliver them with others, also ready for new challenges, getting more focused, valued, practical.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Manthan Ghori</span><br />
                   <span> 
                    Surat, Gujarat 395004 IN
                  </span>
                  <br />
                  <span>manthanghori129@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="images/MyResume.pdf" className="button" download><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
