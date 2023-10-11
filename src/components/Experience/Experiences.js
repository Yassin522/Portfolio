import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import drawing from "../../Assets/Projects/drawing.jpg";
import streamlit from "../../Assets/Projects/download.jpeg";
import blood from "../../Assets/Projects/blood.jpeg";
import heart from "../../Assets/Projects/heart.jpeg";
import linux from "../../Assets/Projects/linux.jpg";
import schoolmate from "../../Assets/Projects/teacher mockup_014955.jpg";
import radio from "../../Assets/Projects/Free Black Keyboard With Smartphone Mockup.jpg";
import spark from "../../Assets/Experiences/1519895156650.jpeg";
import in1minute from "../../Assets/Experiences/1535467604961.jpeg";
import omdena from "../../Assets/Experiences/omdena.jpeg";
import shai from "../../Assets/Experiences/1652345898144.jpeg";
import shellcode from "../../Assets/Experiences/photo_2022-09-06_22-02-04.jpg";
import ICPC from "../../Assets/Experiences/p4755.jpg";
import rbcs from "../../Assets/Experiences/photo_2021-10-05_12-37-55.jpg";



function Experiences() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies I've worked with recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={omdena}
              isBlog={false}
              title="Junior ML Engineer "
              description="Volunteer in Omdena Ile-de-France Chapter: Building a Conversational AI Chatbot for Alternative Transportation During Strikes in France.
               
             "

             date="Feb 2023- Present"
            //   ghLink="https://github.com/Yassin522/Interactive-Drawing-Education-System-for-Children"
            //   demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={shai}
              isBlog={false}
              title="Data Science Intern at SHAI For AI"
              description="The Data Science Trainee will be responsible for: Assisting with data collection, cleaning and preparation, Building and testing predictive models, Developing data visualizations to communicate insights, Staying up-to-date with the latest advancements in data science and machine learning"
              date="Feb 2023- Present"
          
              //   ghLink="https://github.com/Yassin522/My-webpage-using-streamlit"
            //   demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={in1minute}
              isBlog={false}
              title="Research Intern at In1Minute"
              description="Overall, I am grateful for the opportunity to participate in the ResearchMate-2nd Season workshop and am honored to have received this Certificate of Recognition. I am confident that the skills and knowledge that I have gained through this workshop will be valuable assets in my professional development and future career endeavors."
              date="Oct 2022- Nov 2022"
           
              //   ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Heartbeat-Categorization"
            //   demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={shellcode}
              isBlog={false}
              title="ShellCode Solution FLutter intern"
              description="IT Services and IT Consulting. Work was done for a month on an application to manage a whole hotel and flutter were used to implement this project."
              date="July 2022- Aug 2022"
           
              //   ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Exploring-the-Evolution-of-Linux"
            //   demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={ICPC}
              isBlog={false}
              title="ICPC - International Collegiate Programming Contest"
              description="Ranked 12th in the 2021 Al-Baath University Collegiate Programming Contest.
              Ranked 19th in the 2022 ICPC Damascus University Collegiate Programming Contest.
              146th place among more than 400 participating teams in The 2021 ACPC Kickoff Online Individual Contest.
              232th place among more than 400 participating teams in The 2022 ACPC Kickoff Online Individual Contest."
          
              date="Jan 2021- Present"
              //   ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Give%20Life_%20Predict%20Blood%20Donations"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={rbcs}
              isBlog={false}
              title="Tutor at RBCs Team"
              description="Red Blood Cells Team (RBCs) is an educational voluntary team of academic youth, working towards the growth and development of the Syrian society and University students, providing them with the best educational academic materials, online and offline."
              date="Feb 2021- Present"
          
              //   ghLink="https://github.com/Yassin522/SchoolMate-Dashboard"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;
