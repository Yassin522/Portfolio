import React from "react";
import { Container } from "react-bootstrap";
import ExperienceCard from "./ExperienceCards";
import Particle from "../Particle";
import RevealWrapper from "../RevealWrapper";

import in1minute from "../../Assets/Experiences/1535467604961.jpeg";
import shai from "../../Assets/Experiences/1652345898144.jpeg";
import ICPC from "../../Assets/Experiences/p4755.jpg";
import seventh from "../../Assets/Experiences/seventhgeneration.png";
import rachis from "../../Assets/Experiences/photo_2024-07-01_11-19-54.jpg";
import tp from "../../Assets/Experiences/truepositive_tech_logo.jpeg";
import ASPU from "../../Assets/Experiences/ASPU-Logo-1.png";

const experienceData = [
  {
    imgPath: ASPU,
    title: "Teaching Assistant at ASPU - Al Sham Private University",
    date: "Oct 2025 – present",
    demoLink: "https://www.aspu.edu.sy/site/english/index.php",
    description: [
      "Teach Machine Learning and Information Retrieval concepts.",
      "Create tutorial materials and programming examples to support the courses.",
    ],
  },
  {
    imgPath: tp,
    title: "Data Scientist at TruePositive",
    date: "Feb 2025 – Sep 2025",
    demoLink: "https://www.linkedin.com/company/truepositive-tech/posts/?feedView=all",
    description: [
      "Performed EDA on subscriber activity and revenue data to uncover churn drivers and usage behavior patterns.",
      "Delivered Drip, RFM, Growth, and GEO analyses for MTN Congo.",
      "Built interactive dashboards with Apache Superset for real-time KPI visibility.",
      "Social Network Analysis pipeline — reduced processing time by 90% via DuckDB migration.",
      "Collaborated on projects involving Large Language Models (LLMs).",
    ],
  },
  {
    imgPath: rachis,
    title: "R&D Engineer at Rachis Systems",
    date: "Oct 2024 – Mar 2025",
    demoLink: "https://rachis.co/",
    description: [
      "Built a federated learning framework with adaptive differential privacy, achieving 98.7% accuracy on MNIST.",
      "Enhanced an iris recognition system by improving accuracy and reliability.",
      "Applied meta-learning to optimize vehicle routing with time windows.",
    ],
  },
  {
    imgPath: seventh,
    title: "Data Engineer at Seventh Generation Tech",
    date: "May 2024 – Aug 2024",
    demoLink: "https://www.seventhgenerationtech.com/",
    description: [
      "Developed and maintained web scraping pipelines using Selenium and BeautifulSoup.",
      "Extracted product data for IRANK, ensuring accuracy and freshness.",
      "Conducted data cleaning and feature extraction for structured analysis.",
    ],
  },
  {
    imgPath: shai,
    title: "Data Science Intern at SHAI For AI",
    date: "Feb 2023 – Apr 2024",
    demoLink: "https://shaiforai.com/",
    description: [
      "Completed a remote training program specializing in data science principles.",
      "Acquired skills in data analysis, machine learning, and statistical modeling.",
    ],
  },
  {
    imgPath: in1minute,
    title: "Research Intern at In1Minute",
    date: "Oct 2022 – Nov 2022",
    description: [
      "Participated in collaborative research with a diverse cohort.",
      "Gained insights from professionals across various backgrounds.",
    ],
  },
  {
    imgPath: ICPC,
    title: "ICPC — International Collegiate Programming Contest",
    date: "Jan 2021 – 2023",
    description: [
      "Ranked 12th in the 2021 Al-Baath University Collegiate Programming Contest.",
      "Ranked 19th in the 2022 ICPC Damascus University Collegiate Programming Contest.",
      "146th place (of 400+) in The 2021 ACPC Kickoff Online Individual Contest.",
    ],
  },
];

function Experiences() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <RevealWrapper>
          <h1 className="project-heading">
            My Recent <strong className="purple">Experience</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few companies and roles I've been part of recently.
          </p>
        </RevealWrapper>

        <div className="timeline-container">
          {experienceData.map((exp, index) => {
            const side = index % 2 === 0 ? "timeline-left" : "timeline-right";
            return (
              <RevealWrapper key={index} delay={index * 0.1} className={`timeline-item ${side}`}>
                <ExperienceCard
                  imgPath={exp.imgPath}
                  isBlog={false}
                  title={exp.title}
                  description={exp.description}
                  date={exp.date}
                  demoLink={exp.demoLink}
                  ghLink={exp.ghLink}
                />
              </RevealWrapper>
            );
          })}
        </div>
      </Container>
    </Container>
  );
}

export default Experiences;
