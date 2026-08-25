import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RevealWrapper from "../RevealWrapper";
import drawing from "../../Assets/Projects/drawing.jpg";
import jigsaw from "../../Assets/Projects/photo_2023-12-24_10-25-35.jpg";
import fluent from "../../Assets/Projects/onboard_2.png";
import schoolmate from "../../Assets/Projects/teacher mockup_014955.jpg";

const projects = [
  {
    imgPath: fluent,
    title: "FluentFlow",
    description:
      "Bachelor's Degree Project in AI Engineering. A web app that evaluates public speaking skills across body language, voice modulation, and speech content, providing real-time multi-criteria feedback.",
    ghLink: "https://github.com/Yassin522/Fluent-Flow",
    demoLink: "https://drive.google.com/file/d/1QMHhLBDc0VJzFy7Cy1K0D_bvz1YaYUG-/view?usp=sharing",
    techStack: ["Python", "Computer Vision", "NLP", "React", "MediaPipe"],
  },
  {
    imgPath: jigsaw,
    title: "Jigsaw Genius",
    description:
      "Solves jigsaw and grid puzzles using computer vision. Users upload puzzle images and receive accurate solutions; hint images can be provided for complex puzzles.",
    ghLink: "https://github.com/Yassin522/jigsaw-genius",
    demoLink: "https://www.linkedin.com/posts/yassin-abdulmahdi_computervision-jigsaw-opencv-activity-7144589745954742272-UhvE",
    techStack: ["Python", "OpenCV", "NumPy", "Image Processing"],
  },
  {
    imgPath: drawing,
    title: "Sketchy",
    description:
      "Interactive web application for drawing education aimed at children. Uses machine learning to predict and assist drawing, providing real-time feedback to develop artistic skills.",
    ghLink: "https://github.com/Yassin522/Sketchy",
    demoLink: "https://sketchy-ten.vercel.app/",
    techStack: ["Python", "ML", "React", "TensorFlow", "Canvas API"],
  },


  {
    imgPath: schoolmate,
    title: "SchoolMate",
    description:
      "Flutter mobile app for students, teachers, and parents with a web dashboard for school administrators. Covers four roles: Student, Teacher, Manager, and Parent.",
    ghLink: "https://github.com/Yassin522/SchoolMate-Dashboard",
    demoLink: "https://www.linkedin.com/posts/yassin-abdulmahdi_flutter-flutterdeveloper-firebase-activity-6965249047607541760-Fvin",
    techStack: ["Flutter", "Dart", "Firebase", "Firestore"],
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <RevealWrapper>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </RevealWrapper>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((proj, index) => (
            <Col md={4} className="project-card" key={index}>
              <RevealWrapper delay={index * 0.08}>
                <ProjectCard
                  imgPath={proj.imgPath}
                  isBlog={false}
                  title={proj.title}
                  description={proj.description}
                  ghLink={proj.ghLink}
                  demoLink={proj.demoLink}
                  techStack={proj.techStack}
                />
              </RevealWrapper>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
