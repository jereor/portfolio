import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jereor" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jere-orava-a67445162/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jere Orava</h1>
          <p>C++ Tools & Systems Programmer</p>
          <p><i>"I build systems where complex behavior is predictable, failures are visible, and teams can move fast with confidence."</i></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jereor" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jere-orava-a67445162/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;