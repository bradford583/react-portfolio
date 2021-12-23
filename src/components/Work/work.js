import React from 'react';
import Project from '../Project/project';

function Work() {
    
    const projects = [
        {
            filename: 'BookFinder.png',
            title: 'BookFinder',
            link: 'https://conleyannmarie.github.io/book-finder/',
            gitHubLink: 'https://github.com/conleyannmarie/book-finder'
        },
        {
            filename: 'Employee_Tracker.png',
            title: 'Employee_Tracker',
            link: 'https://github.com/bradford583/employee-tracker',
            gitHubLink: 'https://github.com/bradford583/employee-tracker'
        },
        {
            filename: 'Flix-Fix.png',
            title: 'Flix-Fix',
            link: 'https://pure-falls-88054.herokuapp.com/',
            gitHubLink: 'https://github.com/michaelheinhold/group-project-2'
        },
        {
            filename: 'Password_Generator.png',
            title: 'Password_Generator',
            link: 'https://bradford583.github.io/password-generator/',
            gitHubLink: 'https://github.com/bradford583/password-generator'
        },
        {
            filename: 'Weather-Dashboard.png',
            title: 'Weather-Dashboard',
            link: 'https://bradford583.github.io/weather-dashboard/',
            gitHubLink: 'https://github.com/bradford583/weather-dashboard'
        },
    ]
    
    return (
        <section className='content'>
            <div className='wrapper'>
                {projects.map((project) => (<Project project={project} key={project.title} />))}
            </div>
        </section>
    );
}

export default Work;