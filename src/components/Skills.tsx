import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker, faAndroid } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const languages = [
    "C++",
    "C#",
    "Python",
    "JavaScript",
    "Lua"
];

const tools = [
    "Git",
    "Perforce",
    "Jenkins",
    "TeamCity",
    "Docker",
    "CMake",
    "AWS",
    "Linux",
    "Appium"
];

const platforms = [
    "Unreal Engine",
    "Unity",
    "Xcode",
    "Android Studio"
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="summary-container">
            <p>
                Development teams lose time to systems that behave differently across environments, fail silently, or require manual intervention to stay stable. <br></br><br></br>
                <b><i>I solve that class of problem</i></b> — building tools, pipelines, and infrastructure that make complex systems reproducible and teams faster.<br></br><br></br>
                <b><i>In practice that means</i></b>: deterministic test frameworks that give teams hard data before release, validation pipelines that behave identically across every environment and CI run, <br></br>
                and production features that handle real-world edge cases without breaking the systems around them.
            </p><br></br>
        </div>
        <div className="skills-container">
            <h1>Skills</h1>
            <p>
                <b><i>Deterministic systems thinking</i></b>: I've built systems where reproducibility is a hard requirement — not a nice-to-have. From scripting worst-case scenarios across distributed device farms <br></br>
                to version-controlled configuration that eliminates environment-specific failures, I treat non-determinism as an engineering problem with an engineering solution.
            </p>
            <p>
                <b><i>Shipping in large, live codebases</i></b>: My professional work runs in production. That means handling platform edge cases, working across existing system boundaries,  <br></br>
                and being accountable to other teams who depend on what I build
            </p>
            <p>
                <b><i>Infrastructure for teams, not just tasks</i></b>: I build things that scale — reusable libraries, modular architectures, systems consumed by multiple stakeholders.<br></br>
                I care about the person using the tool as much as the tool itself.
            </p>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Languages</h3>
                    <div className="flex-chips">
                        {languages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Tools</h3>
                    <div className="flex-chips">
                        {tools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Platforms</h3>
                    <div className="flex-chips">
                        {platforms.map((label, index) => (
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