import React from 'react';
import aboutImage from "../../images/abstract-woman-face.png";

function About()
{
    return (
        <div>

            <section id="about" className="about">
                <h2>About</h2>
                <div className="about-info">
                    <div className="about-img">
                        <img src={aboutImage} alt="Abstract Woman Face" />
                    </div>
                    <div className="about-text">
                        <p>Motivated professional full stack web developer leveraging background in engineering to
                            provide
                            comprehensive solutions. Earned a certificate in Full Stack Web Development from the
                            University
                            of California Berkeley Coding Boot Camp. Innovative problem-solver who is passionate about
                            web
                            design and development. Strengths in creativity, teamwork, and building projects from
                            concept to
                            complete execution.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;