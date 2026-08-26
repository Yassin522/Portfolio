import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsChevronDown } from "react-icons/bs";

// Flat list card: logo + role kicker + title on the left, date pill on the
// right, with metrics/tags always visible and the bullet list behind a toggle.
function ExperienceCards(props) {
  const [open, setOpen] = useState(false);
  const bullets = Array.isArray(props.description) ? props.description : [];
  const hasDetails = bullets.length > 0;

  return (
    <article className={`experience-card ${open ? "is-open" : ""}`}>
      <div className="experience-top">
        <div className="experience-identity">
          <span className="employer-logo">
            <img src={props.imgPath} alt={props.org || props.title} />
          </span>
          <div>
            {props.role && <span className="experience-role">{props.role}</span>}
            <p className="experience-title">{props.title}</p>
            {props.summary && (
              <p className="experience-summary">{props.summary}</p>
            )}
          </div>
        </div>
        {props.date && <span className="status-pill">{props.date}</span>}
      </div>

      {props.metrics && props.metrics.length > 0 && (
        <div className="experience-metrics">
          {props.metrics.map((m) => (
            <div className="experience-metric" key={m.label}>
              <span className="experience-metric-value">{m.value}</span>
              <span className="experience-metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {props.tags && props.tags.length > 0 && (
        <div className="experience-tags">
          {props.tags.map((tag) => (
            <span className="experience-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="experience-footer">
        {hasDetails && (
          <button
            type="button"
            className="expand-experience"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide details" : `What I did (${bullets.length})`}
            <BsChevronDown className="expand-chevron" />
          </button>
        )}

        <div className="experience-links">
          {props.ghLink && (
            <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="case-link"
            >
              <BsGithub /> GitHub
            </a>
          )}
          {props.demoLink && !props.isBlog && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="case-link"
            >
              <CgWebsite /> Website
            </a>
          )}
        </div>
      </div>

      {open && hasDetails && (
        <ul className="experience-details">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ExperienceCards;
