import React, { Component } from 'react'
import "./About.css"
import portfolioPhoto from "./Portfolio_Photo.png"

class About extends Component {
    render() {
        return (
            <div className="about-div">
                <img className="portfolio-photo" src={portfolioPhoto} alt="portfolio"/>
                <p className="about-text">
                I am a full stack web developer with a background in financial services planning to leverage my experience working at a stock brokerage firm to develop scalable web solutions for every day business needs. I recently earned a full stack web developer certification via University of Oregon, and have achieved proficiency in skills such as HTML, CSS, JavaScript, React.js and more. Known as a good communicator and collaborator, I hope to use these skills to be an integral part of a development team. I’m currently working with a team to revamp and modernize the website of a member firm (FINRA & SIPC) with the goal of achieving an intuitive UI in order to help the company better serve their clients. As a former financial adviser and operations manager, I have become well aware of the impact a well designed website can have on the day to day functions of a business. Having this awareness, I am excited to use my perspective to create meaningful and affective web solutions. 
                    <br></br>
                    <br></br>
                If I'm not working, I'm probably playing music, my absolute favorite thing to do!
                </p>
            </div>
        )
    }
}

export default About;