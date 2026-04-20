import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCards(props) {
  return (
    <div className="timeline-card">
      <div className="timeline-card-header">
        <img
          src={props.imgPath}
          alt={props.title}
          className="timeline-logo"
        />
        <div style={{ flex: 1 }}>
          <p className="timeline-card-title">{props.title}</p>
          {props.date && (
            <span className="timeline-date-chip">{props.date}</span>
          )}
        </div>
      </div>

      {Array.isArray(props.description) && (
        <ul className="timeline-desc-list">
          {props.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "10px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {props.ghLink && (
          <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="timeline-link-btn">
            <BsGithub style={{ marginRight: "4px" }} />
            GitHub
          </a>
        )}
        {props.demoLink && !props.isBlog && (
          <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="timeline-link-btn">
            <CgWebsite style={{ marginRight: "4px" }} />
            Website
          </a>
        )}
      </div>
    </div>
  );
}

export default ExperienceCards;
