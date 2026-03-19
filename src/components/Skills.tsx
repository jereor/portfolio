import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker, faAndroid } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
    "C++",
    "Python",
    "JavaScript",
    "Lua",
    "CMake"
];

const labelsSecond = [
    "Git",
    "Perforce",
    "Jenkins",
    "TeamCity",
    "Docker",
    "AWS",
    "Linux",
    "Appium"
];

const labelsThird = [
    "C++",
    "C#",
    "Unreal Engine",
    "Unity",
    "Xcode",
    "Android Studio"
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Tools & Systems</h3>
                    <p>
                        I build internal tools and systems that help game teams work more efficiently, using C++ and Python.
                        My focus is on developing robust tooling, reusable libraries, and engineering solutions that 
                        scale across large production codebases. 
                        I solve workflow problems and build tools that remove friction for developers, designers, and artists.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>
                        I develop automation and architecture that support reliable game development pipelines. 
                        My work includes CI infrastructure, validation tools, and automated testing systems designed 
                        to keep builds stable and reduce manual overhead across large teams.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Game Development & Live Production</h3>
                    <p>
                        I have professional experience working on live games and production pipelines using C++, C# and Lua. 
                        My work spans UI/UX, automation, and tools that support the full game development lifecycle. 
                        I collaborate across disciplines to build systems that scale for long-term live game development.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;