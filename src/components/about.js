import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/jay.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Building state-of-the-art, easy to use, User-Friendly Web App is truly a passion of mine. I actively seek out new technologies and stay up-to-date on industry trends and advancements.
               </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Jay Patel</span><br />
                  <span>Shukan Rivera<br />
                    Surat, Gujarat 395004 IN
                  </span>
                  <br />
                  <span>jaypatel199700@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="images/MyResume.pdf" className="button" download><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div> ]
        </div>
      </div>
    );
  }
}

export default About;
