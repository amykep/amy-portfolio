import React from 'react';
import project1 from "../../images/dog-cat-breeds.png";
import project2 from "../../images/E-SOLUTIONS WEBSITE.png";
import project3 from "../../images/Extraordinary Cakes.png";
import project4 from "../../images/login-signup.png";
import project5 from "../../images/budget-tracker.png";
import project6 from "../../images/password-generator.png";


function Projects()
{
    const projects = [
        {
            id: 1,
            name: 'Dog-Cat-Breed-Search',
            image: <img src={project1} alt="Dog-Cat-Breed-Search" />,
            description: "This project lets users search for a specific dog or cat breed. When a user enters a specific dog or cat breed, a random picture of that breed with some facts about it will populate the webpage. There are two error responses: one for breeds that we do not have yet/do not exist and when the user tries to do an empty search. The user also has the ability to look at previously searched breeds as well as clearing the previously searched breed history.",
            githubLink: 'https://github.com/amykep/dog-cat-breed-search',
            link: 'https://amykep.github.io/dog-cat-breed-search/'
        },
        {
            id: 2,
            name: 'E-SOLUTIONS WEBSITE',
            image: <img src={project2} alt="E-SOLUTIONS WEBSITE" />,
            description: "E-Solutions is a online course library that allows users to post courses they have previously taken on the website. Users can also comment on other peoples posts and leave reviews for other users to read. This is a full stack web application that was built using many different dependencies. Dependencies include bcrypt, mysql2, dotenv, sequelize, connect-session-sequelize, handlebars, express, express-handlebars, express-session, and lodash.",
            githubLink: 'https://github.com/amykep/E-Solutions-New',
            link: 'https://peaceful-ridge-93332.herokuapp.com/'
        },
        {
            id: 3,
            name: 'Extraordinary Cakes',
            image: <img src={project3} alt="Extraordinary Desserts" />,
            description: "Extraordinary Cakes is an online bakery that will allow customers to browse through a variety of cakes and desserts based on special occasions. Through the website customers can check the current inventory and use a safe and secure checkout to process their order.",
            githubLink: 'https://github.com/amykep/extraordinary-cakes',
            link: 'https://amysbakery.herokuapp.com/'
        },
        {
            id: 4,
            name: 'Tech-Blog',
            image: <img src={project4} alt="Tech-Blog" />,
            description: "E-Post is a CMS-style blog where developers can publish their blog posts and comment on other developers posts as well.",
            githubLink: 'https://github.com/amykep/Tech-Blog',
            link: 'https://salty-castle-67103.herokuapp.com/'
        },
        {
            id: 5,
            name: 'amy-budget-tracker',
            image: <img src={project5} alt="amy-budget-tracker" />,
            description: "This aplication is a budget tracker that allows users to add expenses and deposits so they can keep track of their funds. This app is a Progressive Web Application which allows the users to use the app while not connected to internet or if they are on a slow connection without losing their functionality. If the user enters transactions offline, the total should be updated when they're brought back online",
            githubLink: 'https://github.com/amykep/amy-budget-tracker',
            link: 'https://vast-everglades-41705.herokuapp.com/'

        },
        {
            id: 6,
            name: 'password-generator',
            image: <img src={project6} alt="password-generator" />,
            description: "This is an application that an employee can use to generate a random password based on criteria they have selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code.",
            githubLink: 'https://github.com/amykep/password-generator',
            link: 'https://amykep.github.io/password-generator/'
        },

    ];

    return (
        <section>

            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                    >
                        <h1>
                            {project.name}</h1>
                        {project.image}
                        <p>{project.description}</p>
                        <h6>  <a href={project.githubLink}>{project.githubLink}</a></h6>
                        <h6>  <a href={project.link}>{project.link}</a></h6>
                    </li>
                ))}
            </ul>
        </section>
    );
}


export default Projects;