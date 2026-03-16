import React from "react";
import warframeOfferHighlightThumbnail from '../assets/images/warframe/offer_highlight/offer_highlight_design.png';
import warframeBreadcrumbingThumbnail from '../assets/images/warframe/breadcrumbing/breadcrumbing_pause_arsenal.png';
import assetToolsThumbnail from '../assets/images/asset-tools-thumbnail.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Work Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.digitalextremes.warframemobile" target="_blank" rel="noreferrer"><h2>Warframe - In-App Store Offer Highlights</h2></a>
                <a href="https://play.google.com/store/apps/details?id=com.digitalextremes.warframemobile" target="_blank" rel="noreferrer"><img src={warframeOfferHighlightThumbnail} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Designed and implemented a C++ system to surface curated in‑game offers whenever players opened the pause menu.</p>
                <p>Implemented algorithms to prioritize limited‑time offers and high‑value premium bundles.</p>
                <p>Streamlined the purchase flow by deep‑linking directly to the purchase screen.</p>
                <p>Resulted in <b>~10% increase in conversion and revenue.</b></p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.digitalextremes.warframemobile" target="_blank" rel="noreferrer"><h2>Warframe - Menu Breadcrumbing System</h2></a>
                <a href="https://play.google.com/store/apps/details?id=com.digitalextremes.warframemobile" target="_blank" rel="noreferrer"><img src={warframeBreadcrumbingThumbnail} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Implemented a UI guidance system to help players discover newly unlocked quests, equipment, and upgrades.</p>
                <p>Improved early‑game onboarding and reduced missed progression opportunities.</p>
                <p><b>Increased player retention and overall satisfaction with the progression loop.</b></p>
                <p>Well‑received by both new players and long‑time Warframe veterans.</p>
            </div>
        </div>

        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><h2>Asset Validation Tool</h2></a>
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><img src={assetToolsThumbnail} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Developed a C++ prototype of an internal asset validation tool designed to support content creation workflows and asset pipelines. This project is built with CMake and integrates effortlessly into Jenkins CI using Docker.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;