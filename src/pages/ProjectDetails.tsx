import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

function ProjectDetails() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const { id } = useParams();
    console.log("Project: ", id)

    const project = projects[id as keyof typeof projects];

    if (!project) {
        console.log("Project not found: ", id)
        return <h2>Project not found</h2>;
    }

    return (
        <>
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
        </>
  );
}

export default ProjectDetails;