import React from "react";
import thumbnail1 from '../assets/images/asset-tools-thumbnail.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><img src={thumbnail1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><h2>Asset Tools</h2></a>
                <p>Developed a C++ prototype of an internal game development tool designed to support content creation workflows and asset pipelines.</p>
                <p>The project focuses on pre-engine asset validation similar to what game companies like Supercell would use. The idea is that assets are validated close to asset creation to catch problems before the assets are imported to the game engine. First by artists and designers, and later re-validated by build pipelines.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;