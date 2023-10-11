import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import drawing from "../../Assets/Projects/drawing.jpg";
import streamlit from "../../Assets/Projects/download.jpeg";
import blood from "../../Assets/Projects/blood.jpeg";
import heart from "../../Assets/Projects/heart.jpeg";
import linux from "../../Assets/Projects/linux.jpg";
import schoolmate from "../../Assets/Projects/teacher mockup_014955.jpg";
import radio from "../../Assets/Projects/Free Black Keyboard With Smartphone Mockup.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drawing}
              isBlog={false}
              title="Sketchy"
              description="I have developed an innovative interactive web application designed with my team to facilitate drawing education for children. This system utilizes machine learning algorithms to predict and assist children in their drawing endeavors. Its primary objective is to provide an engaging and interactive learning experience that enables children to develop their artistic skills while receiving real-time feedback and support."
              ghLink="https://github.com/Yassin522/Interactive-Drawing-Education-System-for-Children"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamlit}
              isBlog={false}
              title="Web page using Stramlit"
              description="I just tried to build a web page using the powerful Python library, Streamlit. This tool provides intuitive and interactive insights into complex data sets. The end result is a high-quality, web-based application that is accessible to users of all technical levels."
              ghLink="https://github.com/Yassin522/My-webpage-using-streamlit"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heartbeat Categorization"
              description="This project is aimed at developing a machine learning model that can accurately classify heartbeats as either normal or abnormal. The model is trained on a dataset of ECG (electrocardiogram) signals, which were collected from patients and labeled by medical professionals."
              ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Heartbeat-Categorization"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linux}
              isBlog={false}
              title="Exploring the Evolution of Linux"
              description="Conducted an exploratory data analysis using Python and Pandas to understand the evolution of the Linux operating system."
              ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Exploring-the-Evolution-of-Linux"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="Give Life: Predict Blood Donations"
              description="Built a machine learning model using Python and Scikit-learn to predict blood donation behavior of donors"
              ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Give%20Life_%20Predict%20Blood%20Donations"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolmate}
              isBlog={false}
              title="SchoolMate"
              description="The project is an Flutter application for the student, teacher and parents and also a web application for the administration to control all school data"
              ghLink="https://github.com/Yassin522/SchoolMate-Dashboard"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radio}
              isBlog={false}
              title="Ai Radio"
              description="It is a radio player application that supports Syrian radio stations"
              ghLink="https://github.com/Yassin522/Flutter-ai-voice-assistant"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
