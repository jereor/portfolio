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
    "Appium",
    "Xcode",
    "Android Studio"
];

const platforms = [
    "Unreal Engine",
    "Unity",
    "Proprietary Engines"
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="summary-container">
            <p>
                Most development slowdowns aren't code problems 
                — they're systems problems. Builds that behave differently across environments. 
                Tests that pass locally and fail in CI. Features that work until an edge case surfaces in production. 
                <br></br><br></br>
                <b><i>I solve that class of problem</i></b> 
                — building automation frameworks, CI pipelines, and internal tooling that make complex behavior 
                reproducible, failures visible early, and teams faster as a result.
                <br></br><br></br>
                <b><i>In practice that means</i></b>: deterministic test frameworks that give teams hard data 
                before release, validation pipelines that behave identically across every environment and CI run, <br></br>
                and production features that handle real-world edge cases without breaking the systems around them.
            </p><br></br>
        </div>
        <div className="skills-container">
            <h1>Skills</h1>
            <p>
                <b><i>Deterministic systems thinking</i></b>: Reproducibility is a hard requirement in my work 
                — not a nice-to-have. 
                I've scripted worst-case scenarios across distributed device farms, 
                built version-controlled configuration layers that eliminate environment-specific failures, 
                and designed CI pipelines that behave identically regardless of where they run. 
                I treat non-determinism as an engineering problem with an engineering solution.
            </p>
            <p>
                <b><i>Shipping in large, live codebases</i></b>: My professional work runs in production 
                — in live, cross-platform games with millions of players. 
                That means handling platform edge cases, working carefully across existing system boundaries, 
                and being accountable to the teams who depend on what I build. 
                Correctness and resilience aren't optional when a mistake affects a live product.
            </p>
            <p>
                <b><i>Infrastructure for teams, not just tasks</i></b>: I build things designed to be used 
                — reusable libraries, modular architectures, frameworks adopted across multiple projects and teams. 
                Good tooling reduces friction for the people it serves, so I care as much about the developer experience 
                of a system as its technical correctness.
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