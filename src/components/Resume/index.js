import React from 'react';
import resumeImg from "../../images/resume.png";
import pdfresume from "../../images/Resume.pdf";


function Resume()
{
    return (
        <section>
            <div className="container">
                <img src={resumeImg} alt="Amy Resume" />
                <a href={pdfresume}>Click Here to Download Resume: Resume.PDF</a>
                <ul>
                    <h3>Front-end Proficiencies</h3>
                    <li className="resume-text">HTML</li>
                    <li className="resume-text">CSS</li>
                    <li className="resume-text">JavaScript</li>
                    <li className="resume-text">JSX</li>
                    <li className="resume-text">JQuery</li>
                    <li className="resume-text">Bootstrap</li>
                    <li className="resume-text">Responsive Desgin</li>
                    <li className="resume-text">REACT</li>
                    <br />
                    <h3>Back-end Proficiencies</h3>
                    <li className="resume-text">Node.js</li>
                    <li className="resume-text">Express.js</li>
                    <li className="resume-text">GraphQL APIs</li>
                    <li className="resume-text">MySQL</li>
                    <li className="resume-text">MongoDB</li>
                    <li className="resume-text">Model-View-Controller(MVC)</li>
                    <li className="resume-text">Concurrent servers in a MERN app</li>
                    <li className="resume-text">Authentication</li>

                </ul>
            </div>
        </section>
    );
}

export default Resume;