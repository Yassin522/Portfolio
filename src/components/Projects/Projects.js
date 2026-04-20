import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RevealWrapper from "../RevealWrapper";
import drawing from "../../Assets/Projects/drawing.jpg";
import jigsaw from "../../Assets/Projects/photo_2023-12-24_10-25-35.jpg";
import grammar from "../../Assets/Projects/301766776-a0b498e5-5f8e-4fb3-b53d-56f5f15543db.png";
import ISS from "../../Assets/Projects/cover.jpg";
import Textclass from "../../Assets/Projects/297351041-3b2721da-2df0-4f2f-a736-a1cf9f3a76d5.jpeg";
import fluent from "../../Assets/Projects/onboard_2.png";
import schoolmate from "../../Assets/Projects/teacher mockup_014955.jpg";

const projects = [
  {
    imgPath: fluent,
    title: "FluentFlow",
    description:
      "Bachelor's Degree Project in AI Engineering. A web app that evaluates public speaking skills across body language, voice modulation, and speech content — providing real-time multi-criteria feedback.",
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
    imgPath: grammar,
    title: "English Grammar Error Correction",
    description:
      "Grammar error correction built with the T5 model and a custom Encoder-Decoder architecture. Automatically detects and corrects grammatical errors in written English text.",
    ghLink: "https://github.com/Yassin522/English-Grammar-Error-Correction",
    techStack: ["Python", "T5", "Transformers", "PyTorch", "NLP"],
  },
  {
    imgPath: Textclass,
    title: "Arabic Text Classification",
    description:
      "Arabic text classification and sequence labeling using Naive Bayes, Logistic Regression, LSTMs, and CNNs — with multiple Arabic NLP datasets included.",
    ghLink: "https://github.com/Yassin522/Text-Classification-and-Sequence-Labelling",
    techStack: ["Python", "LSTM", "CNN", "Scikit-learn", "Arabic NLP"],
  },
  {
    imgPath: ISS,
    title: "Information Security System",
    description:
      "Secure communication system between Damascus University and its students/faculty. Client-server architecture over IP/TCP sockets with encryption and identity verification.",
    ghLink: "https://github.com/Yassin522/ISS",
    techStack: ["Python", "Sockets", "Cryptography", "TCP/IP"],
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
