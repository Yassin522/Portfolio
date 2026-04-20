import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "14rem", padding: "16px" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ width: "70%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Card.Title style={{ fontSize: "0.95rem", color: "violet", marginBottom: "8px" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ fontSize: "0.82rem", textAlign: "start", flex: 1 }}>
          {props.description}
        </Card.Text>

        {props.techStack && props.techStack.length > 0 && (
          <div className="tech-tags-container">
            {props.techStack.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div style={{ marginTop: "14px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {props.demoLink && !props.isBlog && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
