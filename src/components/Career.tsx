import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Career() {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Career</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Game Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">Helsinki, Finland</h4>
            <p>
              Tools, CI/CD, Automation, Infrastructure
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <h2>Career Direction</h2>
        <p>
          I'm looking for a <b>game programmer</b> role where I can ship gameplay features and own systems end-to-end 
          — ideally at a studio where quality and engineering craft are both taken seriously.
          <br></br><br></br>
          My tooling and pipeline instincts are a differentiator, not my whole identity:
          I've worked across the full stack from live gameplay features to the CI infrastructure underneath them.
          <br></br><br></br>
          <b><i>If that's what you're looking for, let's talk.</i></b>
        </p>
      </div>
    </div>
  );
}

export default Career;