import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <article className="project-card">
      <div className={`project-visual ${props.fit === "contain" ? "is-contain" : ""}`}>
        <img
          src={props.imgPath}
          alt={props.title}
          className={`project-cover ${
            props.fit === "contain" ? "project-cover--contain" : ""
          }`}
        />
        {props.published && (
          <span className="project-published-badge">Live</span>
        )}
      </div>

      <div className="project-content">
        {props.meta && (
          <div className="project-meta">
            <span>{props.meta}</span>
            {props.year && <span>{props.year}</span>}
          </div>
        )}

        <div className="project-title-row-inner">
          <h3>{props.title}</h3>
          <BsArrowUpRight className="project-arrow" />
        </div>

        <p className="project-description">{props.description}</p>

        {props.techStack && props.techStack.length > 0 && (
          <div className="project-tags">
            {props.techStack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        )}

        <div className="project-links">
          {props.ghLink && (
            <a
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              className="case-link"
            >
              <BsGithub /> Code
            </a>
          )}
          {props.demoLink && !props.isBlog && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="case-link"
            >
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
