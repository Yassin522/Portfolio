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
import jigsaw from "../../Assets/Projects/photo_2023-12-24_10-25-35.jpg";
import grammar from "../../Assets/Projects/301766776-a0b498e5-5f8e-4fb3-b53d-56f5f15543db.png";
import ISS from "../../Assets/Projects/cover.jpg";
import Textclass from "../../Assets/Projects/297351041-3b2721da-2df0-4f2f-a736-a1cf9f3a76d5.jpeg";
import fluent from "../../Assets/Projects/onboard_2.png";



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
              imgPath={fluent}
              isBlog={false}
              title="FluentFlow"
              description="
              • Bachelor's Degree Project in Information Technology Engineering - Artificial Intelligence Department.
              • Developed a web application to assist users in enhancing public speaking skills by evaluating performance across various criteria such as body language, voice modulation, and speech content. 
              • Performance Evaluation: The app assesses users' public speaking skills across multiple criteria: Body Movement and Language: Analyzes gestures, posture, head gaze, and eye gaze to provide insights into non-verbal communication also Voice Analysis: Measures aspects such as speed, vocal variation, pauses, and filler words to
improve speech delivery and Script and Language Evaluation: Examines the script's content, language variation, and
overall coherence.
             "
             
              demoLink="https://drive.google.com/file/d/1QMHhLBDc0VJzFy7Cy1K0D_bvz1YaYUG-/view?usp=sharing"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jigsaw}
              isBlog={false}
              title="jigsaw genius"
              description=" • a sophisticated application designed to tackle jigsaw and grid puzzles using cutting-edge computer vision technology. 
              • It offers an intuitive and interactive experience, enabling users
              to effortlessly upload puzzle images and receive accurate solutions. 
              • A standout feature allows users to provide hint images for added assistance, particularly beneficial for intricate puzzles."
              ghLink="https://github.com/Yassin522/jigsaw-genius"
              demoLink="https://www.linkedin.com/posts/yassin-abdulmahdi_computervision-jigsaw-opencv-activity-7144589745954742272-UhvE?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drawing}
              isBlog={false}
              title="Sketchy"
              description="• I have developed an innovative interactive web application designed with my team to facilitate drawing education for children.
              • This system utilizes machine learning algorithms to predict and assist children in their drawing endeavors.
              • Its primary objective is to provide an engaging and interactive learning experience that enables children to develop their artistic skills while receiving real-time feedback and support."
              ghLink="https://github.com/Yassin522/Sketchy"
              demoLink="https://sketchy-ten.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grammar}
              isBlog={false}
              title="English Grammar Error Correction"
              description="• This project focuses on the development of an English grammar error correction system using the T5 model and implementing an Encoder-Decoder architecture from scratch.
               • The goal is to create a robust and efficient tool that can automatically detect and correct grammatical errors in written English text."
              ghLink="https://github.com/Yassin522/English-Grammar-Error-Correction"
            // demoLink="https://www.linkedin.com/posts/yassin-abdulmahdi_machinelearning-neuralnetworks-knn-activity-7100933861504614401-ZVSi?utm_source=share&utm_medium=member_desktop"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Textclass}
              isBlog={false}
              title="Arabic Text Classification and Sequence Labeling"
              description="• This repository provides a collection of Python scripts for Arabic text classification and sequence labelling tasks.
              • It includes a variety of models, including Naive Bayes and Logistic Regression as well as neural network models such as LSTMs and CNNs.
              • The repository also includes a number of datasets for text classification and sequence labelling."
              ghLink="https://github.com/Yassin522/Text-Classification-and-Sequence-Labelling"
            // demoLink="https://www.linkedin.com/posts/yassin-abdulmahdi_machinelearning-neuralnetworks-knn-activity-7100933861504614401-ZVSi?utm_source=share&utm_medium=member_desktop"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ISS}
              isBlog={false}
              title="Information Security system project"
              description="• This project aims to develop a system that facilitates communication between Damascus University and its students and doctors.
              • The system utilizes a client-server model, consisting of a central server for the university and separate client applications (browsers) for students and doctors.
              • The communication between clients and the server relies on sockets over an IP/TCP connection."
              ghLink="https://github.com/Yassin522/ISS"
            // demoLink="https://www.linkedin.com/posts/yassin-abdulmahdi_machinelearning-neuralnetworks-knn-activity-7100933861504614401-ZVSi?utm_source=share&utm_medium=member_desktop"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolmate}
              isBlog={false}
              title="SchoolMate"
              description="• The project is an Flutter application for the student, teacher and parents and also a web application for the administration to control all school data.
              • The project contains four main roles (Student- Teacher-Manager-Parents).
              • The project was completed using: Frontend: Flutter and Backend: Firebase firestore.
              "
              ghLink="https://github.com/Yassin522/SchoolMate-Dashboard"
              demoLink="https://www.linkedin.com/posts/yassin-abdulmahdi_flutter-flutterdeveloper-firebase-activity-6965249047607541760-Fvin?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamlit}
              isBlog={false}
              title="Web page using Stramlit"
              description="I just tried to build a web page using the powerful Python library, Streamlit. This tool provides intuitive and interactive insights into complex data sets. The end result is a high-quality, web-based application that is accessible to users of all technical levels."
              ghLink="https://github.com/Yassin522/My-webpage-using-streamlit"
            // demoLink="https://www.linkedin.com/posts/yassin-abdulmahdi_machinelearning-neuralnetworks-knn-activity-7100933861504614401-ZVSi?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heartbeat Categorization"
              description="This project is aimed at developing a machine learning model that can accurately classify heartbeats as either normal or abnormal. The model is trained on a dataset of ECG (electrocardiogram) signals, which were collected from patients and labeled by medical professionals."
              ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Heartbeat-Categorization"
            // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linux}
              isBlog={false}
              title="Exploring the Evolution of Linux"
              description="Conducted an exploratory data analysis using Python and Pandas to understand the evolution of the Linux operating system."
              ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Exploring-the-Evolution-of-Linux"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
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
              imgPath={radio}
              isBlog={false}
              title="Ai Radio"
              description="It is a radio player application that supports Syrian radio stations"
              ghLink="https://github.com/Yassin522/Flutter-ai-voice-assistant"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
