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
        <p>
          I'm looking for a <b>Software Developer</b> role in simulation or systems infrastructure — ideally working on the kind of problems where correctness and reproducibility are non-negotiable, <br></br>
          and where the software has real-world consequences. I'm particularly drawn to domains where complexity is the point: large-scale simulation, physics systems, distributed infrastructure.
        </p>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tools & Systems Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">Helsinki, Finland</h4>
            <p>
              Tools, Automation, UI/UX Programming
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <h2>Career Direction</h2>
        <p>
          I'm moving deeper into systems and infrastructure — toward more complexity, larger scale, and harder correctness problems. <br></br>
          My next step is applying the systems mindset I've built in tooling and automation to domains with higher stakes: simulation, robotics, or distributed systems where the cost of getting it wrong is real.
        </p>
      </div>
    </div>
  );
}

export default Career;