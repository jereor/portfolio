import React from "react";
import warframeOfferHighlightThumbnail from '../assets/images/warframe/offer_highlight/offer_highlight_design.png';
import warframeBreadcrumbingThumbnail from '../assets/images/warframe/breadcrumbing/breadcrumbing_pause_arsenal.png';
import unrealPerformanceThumbnail from '../assets/images/bg-dark.png';
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
                <p>
                    <b>Problem:</b>
                    <br></br>
                    Conversion and revenue need to be improved, but new players do not know about all the cool offers in the in-game store.
                </p>
                <p><b>Solution:</b></p>
                <p>Designed and implemented a <b>C++ system to surface curated in‑game offers</b> whenever players opened the pause menu.</p>
                <p>Implemented algorithms to prioritize limited‑time offers and high‑value premium bundles.</p>
                <p>Streamlined the purchase flow by deep‑linking directly to the purchase screen.</p>
                <p>
                    <b>End result</b>:<br></br>
                    <b>~10% increase in conversion and revenue.</b>
                </p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.digitalextremes.warframemobile" target="_blank" rel="noreferrer"><h2>Warframe - Menu Breadcrumbing System</h2></a>
                <a href="https://play.google.com/store/apps/details?id=com.digitalextremes.warframemobile" target="_blank" rel="noreferrer"><img src={warframeBreadcrumbingThumbnail} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>
                    <b>Problem:</b>
                    <br></br>
                    Mobile players are quitting the game after Day 1, because progression is confusing and players don't know what to do next and how to upgrade their gear.
                </p>
                
                <p><b>Solution:</b></p>
                <p>Implemented a <b>C++-based UI guidance system</b> to help players discover newly unlocked quests, equipment, and upgrades.</p>

                <p>
                    <b>End result</b>:<br></br>
                    - Improved early‑game onboarding and reduced missed progression opportunities.<br></br>
                    - Increased player retention and overall satisfaction with the progression loop.<br></br>
                    - Well‑received by both new players and long‑time Warframe veterans.
                </p>
            </div>
            <div className="project">
                <a href="https://urn.fi/URN:NBN:fi:amk-202305047661" target="_blank" rel="noreferrer"><h2>Unreal Engine performance test automation</h2></a>
                <a href="https://urn.fi/URN:NBN:fi:amk-202305047661" target="_blank" rel="noreferrer"><img src={unrealPerformanceThumbnail} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>
                    <b>Problem:</b>
                    <br></br>
                    Tech artists try to improve game performance, but have no easy way of finding where the game has lag spikes, and no way of tracking the impact of their changes.
                </p>
                <p><b>Solution:</b></p>
                <p>
                    Developed a <b>C++‑based performance testing framework</b> to:<br></br>
                    - Drive cameras deterministically through levels<br></br>
                    - Capture and profile performance metrics.<br></br>
                    - Generate SVG performance graphs for analysis and regression tracking.
                </p>
                <p>Implemented a system for <b>deterministically generating worst‑case procedural level scenarios</b> to stress‑test performance.</p>
                <p>Integrated automated performance tests into <b>TeamCity CI</b> with daily execution.</p>
                <p>Wrote Appium scripts to run tests on real devices and integrated <b>AWS Device Farm</b> for large‑scale device coverage.</p>
                <p>Wrote a case study about the project: Automated performance testing of mobile games</p>
                <p>
                    <b>End result</b>:<br></br>
                    - Tech artists got tangible data on which levels and sub-areas in the game were struggling to run on mobile.<br></br>
                    - We knew exactly which devices were having performance issues.<br></br>
                    - Our team was able to provide the client with visual graphs about the game's performance improvements every month. 
                </p>
            </div>
        </div>

        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><h2>Asset Validation Tool</h2></a>
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><img src={assetToolsThumbnail} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>
                    <b>Problem:</b>
                    <br></br>
                    Game teams rely heavily on internal tools for asset validation, content pipelines, and debugging, but those systems are often scattered across projects.
                </p>
                <p><b>Solution:</b></p>
                <p>Designed and implemented a <b>C++ internal tools prototype focused on asset validation</b>. </p>
                <p>Architected with clear module boundaries and separation between engine and tooling code.</p>
                <p>Built reusable core libraries, <b>CMake‑based project structure</b>, and production‑style logging suitable for CI workflows.</p>
                <p>Implemented a version controlled configuration layer for tool behavior and validation rules to ensure deterministic behavior across different users and CI.</p>
                <p>Integrates effortlessly into <b>Jenkins CI</b> using <b>Docker</b>.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;