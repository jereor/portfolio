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
                <b>I'm a game programmer</b> who ships gameplay systems and cares about the engineering underneath them.
                <br></br><br></br>
                <b>My professional work lives in production</b> — live-service features in Warframe Mobile, 
                handling real platform edge cases in a large cross-platform codebase with millions of players. 
                I've built gameplay/UI systems, and progression features that had to be correct, persistent, and resilient from day one.
                <br></br><br></br>
                <b>Alongside that, I have strong instincts in tooling and automation</b> 
                — reusable frameworks in Unity, a deterministic performance testing framework on AWS Device Farm, 
                and CI pipelines built for reproducibility. These aren't separate interests; 
                they come from the same habit of thinking about what makes a codebase and a team sustainable.
                <br></br><br></br>
                I work in C++, C#, and Lua across Unreal Engine, Unity, and proprietary engines.<br></br>
                I'm looking for a role where quality and engineering craft are both taken seriously.
            </p><br></br>
        </div>
        <div className="skills-container">
            <h1>Skills</h1>
            <p>
                <b><i>Working in large, live codebases</i></b>: My professional work runs in production 
                — in live, cross-platform games with millions of players. 
                That means handling platform edge cases, working carefully across existing system boundaries, 
                and being accountable to the teams who depend on what I build. 
                Correctness and resilience aren't optional when a mistake affects a live product.
            </p>
            <p>
                <b><i>Deterministic systems thinking</i></b>: Reproducibility is a hard requirement in my work 
                — not a nice-to-have. 
                I've scripted worst-case scenarios across distributed device farms, 
                built version-controlled configuration layers that eliminate environment-specific failures, 
                and designed CI pipelines that behave identically regardless of where they run. 
                I treat non-determinism as an engineering problem with an engineering solution.
            </p>
            <p>
                <b><i>Infrastructure for teams</i></b>: I build things designed to be used 
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