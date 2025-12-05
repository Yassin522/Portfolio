import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";

// Only import the images you are actually using to keep the file clean
import in1minute from "../../Assets/Experiences/1535467604961.jpeg";
import omdena from "../../Assets/Experiences/omdena.jpeg";
import shai from "../../Assets/Experiences/1652345898144.jpeg";
import ICPC from "../../Assets/Experiences/p4755.jpg";
import seventh from "../../Assets/Experiences/seventhgeneration.png";
import rachis from "../../Assets/Experiences/photo_2024-07-01_11-19-54.jpg";
import tp from "../../Assets/Experiences/truepositive_tech_logo.jpeg";
import ASPU from "../../Assets/Experiences/ASPU-Logo-1.png";

function Experiences() {
  // Data Definition
  const experienceData = [
     {
      imgPath: ASPU,
      title: "Teaching Assistant at ASPU - Al Sham Private University ",
      date: "Oct 2025 – present",
      demoLink: "https://www.aspu.edu.sy/site/english/index.php",
      description: [
        "Teach Machine Learning and Information Retrieval concepts.",
        "Create tutorial materials and programming examples to support the courses.",
      ]
    },
    {
      imgPath: tp,
      title: "Data Scientist at TruePositive",
      date: "Feb 2025 – Sep 2025",
      demoLink: "https://www.linkedin.com/company/truepositive-tech/posts/?feedView=all",
      description: [
        "Performed Exploratory Data Analysis (EDA) on subscriber activity and revenue data to uncover churn drivers and usage behavior patterns.",
        "Delivered Drip, RFM, Growth, and GEO analyses for MTN Congo.",
        "Worked extensively with the SDP schema, integrating data from subscriber demographics, service engagement snapshots, bundle subscriptions, and revenue facts.",
        "Built interactive dashboards with Apache Superset, giving client teams real-time visibility into KPIs and growth opportunities.",
        "Social Network Analysis pipeline on large-scale telecom data, reducing processing time by 90% through migration from PySpark to DuckDB.",
        "Collaborated on projects involving Large Language Models (LLMs)."
      ]
    },
    {
      imgPath: rachis,
      title: "Research And Development Engineer at Rachis Systems",
      date: "Oct 2024 – Mar 2025",
      demoLink: "https://rachis.co/",
      description: [
        "Built a federated learning framework with adaptive differential privacy and client clustering, boosting model accuracy to 98.7% on MNIST data.",
        "Enhanced an iris recognition system by improving accuracy and reliability.",
        "Applied meta-learning to optimize vehicle routing with time windows.",
        "Collaborated with the team to solve real-world ML problems."
      ]
    },
    {
      imgPath: seventh,
      title: "Data Engineer at Seventh Generation Tech",
      date: "May 2024- August 2024",
      demoLink: "https://www.seventhgenerationtech.com/",
      description: [
        "Collaborated with the data team to develop and maintain web scraping pipelines using Selenium and Beautiful Soup.",
        "Extracted and processed data from various websites to gather products information for IRANK, ensuring accurate and up-to-date data for users.",
        "Conducted data cleaning and feature extraction to transform raw data into structured formats suitable for analysis."
      ]
    },
    {
      imgPath: shai,
      title: "Data Science Intern at SHAI For AI",
      date: "Feb 2023 – Apr 2024",
      demoLink: "https://shaiforai.com/",
      description: [
        "Completed a remote training program specializing in the principles of data science.",
        "Engaged in a comprehensive educational experience focused on core principles and practical applications.",
        "Acquired essential skills in data analysis, machine learning, and statistical modeling."
      ]
    },
    {
      imgPath: in1minute,
      title: "Research Intern at In1Minute",
      date: "Oct 2022- Nov 2022",
      description: [
        "Engaged in collaborative research initiatives, participating in knowledge exchange sessions with a diverse cohort.",
        "Leveraged the opportunity to glean insights from professionals representing various backgrounds."
      ]
    },
    {
      imgPath: ICPC,
      title: "ICPC - International Collegiate Programming Contest",
      date: "Jan 2021- 2023",
      description: [
        "Ranked 12th in the 2021 Al-Baath University Collegiate Programming Contest.",
        "Ranked 19th in the 2022 ICPC Damascus University Collegiate Programming Contest.",
        "146th place among more than 400 participating teams in The 2021 ACPC Kickoff Online Individual Contest.",
        "232nd place among more than 400 participating teams in The 2022 ACPC Kickoff Online Individual Contest."
      ]
    }
  ];

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
          {experienceData.map((exp, index) => (
            <Col md={4} className="project-card" key={index}>
              <ExperienceCard
                imgPath={exp.imgPath}
                isBlog={false}
                title={exp.title}
                description={exp.description}
                date={exp.date}
                demoLink={exp.demoLink}
                ghLink={exp.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;