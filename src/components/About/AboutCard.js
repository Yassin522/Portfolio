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
            <br />
            <br />
            I am an <span className="purple">AI Engineer</span> who takes LLM
            systems from architecture to production. At{" "}
            <span className="purple">BeSmart.ai</span> I lead a small engineering
            team shipping generative AI SaaS products: RAG pipelines, no-code
            agent platforms, and multi-tenant architecture. I own the full
            path from model selection and retrieval design through the API layer,
            containerization, and release.
            <br />
            <br />
            Alongside that I work as a{" "}
            <span className="purple">Data Scientist</span>, with experience on
            multi-million-record telecom data: churn analysis, large-scale graph
            pipelines, and dashboards that give client teams real visibility. I
            also teach AI, Machine Learning, and Information Retrieval as a
            Teaching Assistant at Al Sham Private University.
            <br />
            <br />
            What I care about most:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Generative AI &amp; production LLM systems
            </li>
            <li className="about-activity">
              <ImPointRight /> RAG pipelines &amp; agent platforms
            </li>
            <li className="about-activity">
              <ImPointRight /> Applied data science at scale
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching &amp; mentoring engineers
            </li>
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
