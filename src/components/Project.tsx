import React from "react";
import warframeOfferHighlightThumbnail from '../assets/images/warframe/offer_highlight/offer_highlight_design.png';
import warframeBreadcrumbingThumbnail from '../assets/images/warframe/breadcrumbing/breadcrumbing_pause_arsenal.png';
import unrealPerformanceThumbnail from '../assets/images/unreal/performance_test_graph.jpg';
import unityLocalizationThumbnail from '../assets/images/unity/localization_system_diagram.png'
import unityTaggingThumbnail from '../assets/images/unity/tagging_system_diagram.png'
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
                    - Reduced early-game confusion and improved player progression clarity.<br></br>
                    - Helped guide players toward key progression systems, increasing engagement with core gameplay loops.<br></br>
                    - Increased player retention and overall satisfaction with the progression loop.
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
            <div className="project">
                <h2>Unity Localization System</h2>
                <img src={unityLocalizationThumbnail} className="zoom" alt="thumbnail" width="100%"/>
                <p>
                    <b>Problem:</b>
                    <br></br>
                    Localization systems were repeatedly implemented from scratch across projects, leading to duplicated effort and inconsistent implementations.
                </p>
                <p><b>Solution:</b></p>
                <p>Designed and developed a <b>reusable localization system in C#</b> to standardize functionality across multiple Unity projects.</p>
                <p>Implemented a <b>wrapper-based architecture</b> to unify different third-party localization solutions behind a single, consistent interface. </p>
                <p>Built the system using <b>test-driven development {'(TDD)'}</b> to ensure reliability and maintainability.</p>
                <p>
                    <b>End result</b>:<br></br>
                    Reduced development time across projects and lowered the barrier for adopting localization as a standard feature.
                </p>
            </div>
            <div className="project">
                <h2>Unity Tagging System</h2>
                <img src={unityTaggingThumbnail} className="zoom" alt="thumbnail" width="100%"/>
                <p>
                    <b>Problems:</b>
                    <br></br>
                    - Unity’s built-in tagging system is limited (e.g. only one tag per entity).<br></br>
                    - There was confusion between tags and flags, leading to misuse and poor system design.<br></br>
                    - Existing approaches (like spreadsheets) introduced high risk of human error, merge conflicts, and scalability issues.<br></br>
                    - Gameplay systems needed a way to identify entities reliably and query groups of entities efficiently.
                </p>
                <p><b>Solution:</b></p>
                <p>
                    Designed and built a <b>custom tagging system in C#</b> with a clear pipeline:<br></br>
                    - <b>Tag Creation</b>: Tags defined as scriptable data in Unity, stored in a central database, with proper validation and UX (e.g. autocomplete, duplication prevention).<br></br>
                    - <b>Tag Assignment</b>: Tags assigned to entities inside Unity during creation workflows, with proper tooling (e.g. search, autocomplete).<br></br>
                    - <b>Tag Utility in Unity</b>: Tools to query and visualize entities in scenes using tags, with edicated editor windows to display query results (supports logical queries with INCLUDES/EXCLUDES)<br></br>
                    - <b>Tag Utility in Gameplay</b>: Gameplay systems use tag queries to check if an entity has tags, and to retrieve groups of entities from the server
                </p>
                 <p>
                    Tags = identity (persistent, queryable)<br></br>
                    Flags = state (temporary, runtime-only)
                </p>
                <p>Built the system using test-driven development (TDD) to ensure reliability and maintainability.</p>
                <p>
                    <b>End result</b>:<br></br>
                    A scalable, flexible tagging system that:<br></br>
                    - Supports multiple tags per entity<br></br>
                    - Enables powerful querying (both in editor and gameplay)<br></br>
                    - Reduces errors and ambiguity<br></br>
                    - Improves designer workflow and iteration speed
                </p>
            </div>
        </div>


        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><h2>Asset Validation Tool</h2></a>
                <a href="https://github.com/jereor/asset-tools/" target="_blank" rel="noreferrer"><img src={assetToolsThumbnail} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>A production-style C++ tooling project designed to simulate real-world asset pipeline systems used in game development.</p>
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