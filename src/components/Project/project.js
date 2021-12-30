import React from 'react';

function Project({project}) {
    const {filename, title, link, gitHubLink} = project;

    return (
        <div className="card bg-dark">
            <img 
                src={require(`../../assets/portfolio/${filename}`).default} 
                className="card-img-top" 
                alt={title} 
                key={title}
            />
            <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={gitHubLink} className="project-button" target="_blank" rel="noopener noreferrer">
                        View Github Repo
                    </a>
                    <a href={link} className="project-button" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default Project;