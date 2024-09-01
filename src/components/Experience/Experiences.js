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
import seventh from "../../Assets/Experiences/seventhgeneration.png";


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
              imgPath={seventh}
              isBlog={false}
              title="Data Engineer at Seventh Generation Tech"
              description={`• Collaborated with the data team to develop and maintain web scraping pipelines using Selenium and Beautiful Soup.
                   • Extracted and processed data from various websites to gather products information for IRANK, ensuring accurate and up-to-date data for users.
                   • Conducted data cleaning and feature extraction to transform raw data into structured formats suitable for analysis.`}
              date="May 2024- August 2024"
              demoLink="https://www.seventhgenerationtech.com/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={omdena}
              isBlog={false}
              title="Junior Data Scientist at omdena"
              description="• Contributed as a volunteer in the Omdena Ile-de-France Chapter, actively involved in the
development of Conversational AI Chatbot for Alternative Transportation during strikes in
France Responsibilities included designing and implementing machine learning solutions to
enhance communication and accessibility during transportation disruptions.
• Contributed as a volunteer in the Omdena Toronto Chapter, focusing on the Analyzing Brain
Scan Images for the Early Detection and Diagnosis of Alzheimer's Disease project.

             "

              date="May 2023- Present"
              //   ghLink="https://github.com/Yassin522/Interactive-Drawing-Education-System-for-Children"
              demoLink="https://www.omdena.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={shai}
              isBlog={false}
              title="Data Science Intern at SHAI For AI"
              description="• Completed a remote training program at Shai for AI specializing in the principles of data
science.
• Engaged in a comprehensive educational experience focused on core principles and practical
applications of data science.
• Acquired essential skills and knowledge in data analysis, machine learning, and statistical
modeling.
              
              
              "

              date="Feb 2023 – Apr 2024"
              //   ghLink="https://github.com/Yassin522/Interactive-Drawing-Education-System-for-Children"
              demoLink="https://shaiforai.com/"
            //   ghLink="https://github.com/Yassin522/My-webpage-using-streamlit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={in1minute}
              isBlog={false}
              title="Research Intern at In1Minute"
              description="• Engaged in collaborative research initiatives, actively participating in knowledge exchange
sessions with a diverse cohort of fellow participants.

• Leveraged the opportunity to glean insights from professionals representing various
backgrounds, fostering an enriching exchange of ideas and perspectives.
              "
              date="Oct 2022- Nov 2022"

            //   ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Heartbeat-Categorization"
            //   demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={shellcode}
              isBlog={false}
              title="ShellCode Solution FLutter intern"
              description="IT Services and IT Consulting. Work was done for a month on an application to manage a whole hotel and flutter were used to implement this project."
              date="July 2022- Aug 2022"

            //   ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Exploring-the-Evolution-of-Linux"
            //   demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={ICPC}
              isBlog={false}
              title="ICPC - International Collegiate Programming Contest"
              description="• Ranked 12th in the 2021 Al-Baath University Collegiate Programming Contest.
              • Ranked 19th in the 2022 ICPC Damascus University Collegiate Programming Contest.
              • 146th place among more than 400 participating teams in The 2021 ACPC Kickoff Online Individual Contest.
              • 232th place among more than 400 participating teams in The 2022 ACPC Kickoff Online Individual Contest."

              date="Jan 2021- 2023"
            //   ghLink="https://github.com/Yassin522/Data-Sceince-Projects/tree/main/Give%20Life_%20Predict%20Blood%20Donations"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;
