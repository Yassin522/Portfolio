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
            <br /> Data Scientist and Informatics Engineering graduate from Damascus University with hands-on
experience in AI, machine learning, and data-driven problem-solving. Skilled at building innovative
solutions, I specialize in turning complex challenges into impactful, real-world applications

            <br />
            I am open to work in any opportunity related to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> AI
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Frontend developement
            </li> */}

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
