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
          I'm looking for a build engineering or automation role where I can go deeper 
          on CI/CD infrastructure, developer tooling, and the systems that keep live 
          products healthy and teams moving fast.

          I've shipped production features in live codebases, 
          built automated testing infrastructure for mobile, 
          and worked alongside designers, QA, and engineers in fast-moving teams. 
          That's the kind of work I want to keep doing.
        </p>
      </div>
    </div>
  );
}

export default Career;