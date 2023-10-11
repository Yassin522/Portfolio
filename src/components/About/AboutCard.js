import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yassin Abdulmahdi </span>
            from <span className="purple"> Damascus, Syria.</span>
            <br /> I am a final year student pursuing a Bachelor
            in  Information Technology Engineering at Damascus University.
           
            <br />
            I am open to work in any opportunity related to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile application developement
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yassin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
