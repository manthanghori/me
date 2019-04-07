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
                <h3>Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar (Gujarat) </h3>
                <p className="info">Information And Communication Technology<span>&bull;</span> <em className="date">July 2015 - Present</em></p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>DD Radadiya, Surat (Gujarat)</h3>
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
                <h3>Truebil, Mumbai</h3>
                <p className="info">Software Development Intern (FullStack)<span>&bull;</span> <em className="date">Jan 2019 - Present</em></p>
                <p>
                  As part of my internship, I am working on js frameworks like Reactjs, Redux and Nextjs which are used in truebil mobile progressive web app with server side rendering in node js and I am also working on CakePHP module which is used in truebil desktop websites.
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Otter-Trotter, Ahmedabad</h3>
                <p className="info">Product Development Intern <span>&bull;</span> <em className="date">May 2018 - July 2018</em></p>
                <p>
                  Developed merchant side web application using Reactjs and Redux. In this web app users gives inquiry to our system about their holiday plans and then according to this information our system gives day wise itinerary of their trips.
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
                <BarExpand name={"Reactjs"} fill={'90%'}/>
                <BarExpand name={"Redux"} fill={'75%'} />
                <BarExpand name={"Nextjs"} fill={'80%'} />
                <BarExpand name={"JavaScript"} fill={'75%'}/>
                <BarExpand name={"CSS"} fill={'70%'}/>
                <BarExpand name={"HTML"} fill={'75%'}/>
                <BarExpand name={"C++"} fill={'85%'}/>
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
