import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import Button from "@mui/material/Button";
import BackIcon from "@mui/icons-material/ArrowBack";
import Chip from "@mui/material/Chip";
import "../assets/styles/ProjectDetails.scss";

function ProjectDetails() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="project-details-container">
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <h1>{project.title}</h1>

      <div className="flex-chips">
        {project.tech.map((tech, index) => (
          <Chip key={index} className="chip" label={tech} />
        ))}
      </div>

      <div className="project-actions">
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<BackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.05)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Back
        </Button>

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="inherit">
              View Project
            </Button>
          </a>
        )}
      </div>

      <div className="project-section">
        <h2>Problems</h2>
        <ul>
          {project.problems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-section">
        <h2>Solution</h2>
        <ul>
          {project.solutions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-section">
        <h2>Result</h2>
        <p>{project.result}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
