import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCards(props) {
  return (
    <Card className="project-card-view h-100 shadow-sm">
      {/* Image Section */}
      <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "200px" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-3" style={{ color: "violet" }}>
          {props.title}
        </Card.Title>

        {/* Date Section */}
        <Card.Subtitle className="mb-3 text-muted" style={{ fontSize: "0.9rem" }}>
          {props.date}
        </Card.Subtitle>

        {/* Description Section: Renders a list if array, or text if string */}
        <div className="card-text text-start mb-4" style={{ fontSize: "0.9rem" }}>
          {Array.isArray(props.description) ? (
            <ul style={{ paddingLeft: "1.2rem" }}>
              {props.description.map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            props.description
          )}
        </div>

        {/* Buttons Section (Pushed to bottom) */}
        <div className="mt-auto d-flex gap-2 justify-content-center">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noopener noreferrer">
              <CgWebsite /> &nbsp;
              Website
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCards;