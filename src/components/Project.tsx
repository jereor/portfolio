import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";

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
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <Link to="/projects/asset-tools"><h2>{projects["asset-tools"].title}</h2></Link>
                <Link to="/projects/asset-tools"><img src={assetToolsThumbnail} className="zoom" alt="thumbnail" width="100%"/></Link>
                <p>{projects["asset-tools"].description}</p>
            </div>
        </div>

        <h1>Work Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <Link to="/projects/unreal-performance-testing"><h2>{projects["unreal-performance-testing"].title}</h2></Link>
                <Link to="/projects/unreal-performance-testing"><img src={unrealPerformanceThumbnail} className="zoom" alt="thumbnail" width="100%"/></Link>
                <p>{projects["unreal-performance-testing"].description}</p>
            </div>

            <div className="project">
                <Link to="/projects/warframe-offer-highlight"><h2>{projects["warframe-offer-highlight"].title}</h2></Link>
                <Link to="/projects/warframe-offer-highlight"><img src={warframeOfferHighlightThumbnail} className="zoom" alt="thumbnail" width="100%"/></Link>
                <p>{projects["warframe-offer-highlight"].description}</p>
            </div>

            <div className="project">
                <Link to="/projects/warframe-progression-guidance"><h2>{projects["warframe-progression-guidance"].title}</h2></Link>
                <Link to="/projects/warframe-progression-guidance"><img src={warframeBreadcrumbingThumbnail} className="zoom" alt="thumbnail" width="100%"/></Link>
                <p>{projects["warframe-progression-guidance"].description}</p>
            </div>

            <div className="project">
                <Link to="/projects/unity-tagging-query"><h2>{projects["unity-tagging-query"].title}</h2></Link>
                <Link to="/projects/unity-tagging-query"><img src={unityTaggingThumbnail} className="zoom" alt="thumbnail" width="100%"/></Link>
                <p>{projects["unity-tagging-query"].description}</p>
            </div>

            <div className="project">
                <Link to="/projects/unity-localization"><h2>{projects["unity-localization"].title}</h2></Link>
                <Link to="/projects/unity-localization"><img src={unityLocalizationThumbnail} className="zoom" alt="thumbnail" width="100%"/></Link>
                <p>{projects["unity-localization"].description}</p>
            </div>
            
        </div>

    </div>
    );
}

export default Project;