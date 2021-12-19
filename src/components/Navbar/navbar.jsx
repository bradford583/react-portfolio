import React from 'react';


function Navbar() {
    return (
        <header className="navbar">
            
            <nav>
                <ul className="flew-row">
                    <li className="mx-2">
                        <a href="#about">About me</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#resume">My Resume</a>
                    </li>
                </ul>
            </nav>
            
            <div id="titleName">
            <h1>
                
                    Chris Bradford
                
            </h1>
            </div>
        </header>
    );
}

export default Navbar;