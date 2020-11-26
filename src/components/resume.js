import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Sarvajanik College of Engineering & Technology, Surat, Gujarat</h3>
                <p className="info">Chemical Engineering<span>&bull;</span> <em className="date">Aug 2015 - May 2019</em></p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>P P Savani Vidhya Bhavan</h3>
                <p className="info">Intermediate/+2<span>&bull;</span> <em className="date">2013 - 2015 </em></p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Gajere Vidhya Bhavan, Surat (Gujarat)</h3>
                <p className="info">GSEB<span>&bull;</span> <em className="date">2012 - 2013 </em></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>GNFS, Bharuch</h3>
                <p className="info">Vocational Training<span>&bull;</span> <em className="date">Jun 2018 - July 2018</em></p>
                <p>
                  I got to know that several fertilizer unit operation and unit procceses, analyzed P&ID and DI diagrama and learned how to operate process equipment. A Safty precuations also taught.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                <BarExpand name={"SciLab"} fill={'70%'}/>
                <BarExpand name={"Aspam"} fill={'75%'} />
                <BarExpand name={"Microsoft Office"} fill={'80%'} />
                <BarExpand name={"Organic Chemistry"} fill={'90%'}/>
                <BarExpand name={"Teaching"} fill={'80%'}/>
                <BarExpand name={"Process Calculation"} fill={'75%'}/>
                <BarExpand name={"Analyticle Techniques"} fill={'75%'}/>
                <BarExpand name={"C"} fill={'75%'}/>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class BarExpand extends Component {

  render() {
    const fill = this.props.fill,
          name = this.props.name;
    return (
      <li><span className="bar-expand" style={{width: fill}}></span><em>{name}</em></li>
    )
  }

}


export default Resume;
