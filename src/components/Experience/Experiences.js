import React from "react";
import ExperienceCard from "./ExperienceCards";
import RevealWrapper from "../RevealWrapper";
import Section from "../Section";

import in1minute from "../../Assets/Experiences/1535467604961.jpeg";
import shai from "../../Assets/Experiences/1652345898144.jpeg";
import seventh from "../../Assets/Experiences/seventhgeneration.png";
import rachis from "../../Assets/Experiences/photo_2024-07-01_11-19-54.jpg";
import tp from "../../Assets/Experiences/truepositive_tech_logo.jpeg";
import ASPU from "../../Assets/Experiences/ASPU-Logo-1.png";
import besmart from "../../Assets/Experiences/besmart.jpeg";

const experienceData = [
  {
    imgPath: besmart,
    role: "Lead AI Engineer",
    title: "BeSmart.ai",
    summary:
      "Lead a team of three shipping three generative AI SaaS products end to end, from retrieval design through containerized release.",
    metrics: [{ value: "3", label: "products shipped" }, { value: "3", label: "engineers led" }],
    tags: ["LLMs", "RAG", "Qdrant", "MCP", "FastAPI", "Railway"],
    date: "Feb 2026 – present · Saudi Arabia",
    demoLink: "https://besmart.ai/",
    description: [
      "Lead a team of three delivering three generative AI SaaS products from architecture to production release.",
      "Built a multi-platform content tool that turns a single idea into English and Arabic social posts, with scheduling, image generation, and a per-user knowledge base.",
      "Designed a synthetic data service that learns a company's private dataset and generates realistic substitutes safe to share or test with.",
      "Built a no-code platform for embeddable AI chat agents that answer from customer-uploaded documents via Qdrant and reach external tools through MCP servers.",
      "Own model selection, retrieval design, the API layer, and containerized deployment across all products on Railway.",
    ],
  },
  {
    imgPath: ASPU,
    role: "Teaching Assistant",
    title: "Al Sham Private University",
    summary:
      "Teach undergraduate AI, Machine Learning, and Information Retrieval, and author the labs that go with them.",
    metrics: [{ value: "4", label: "courses taught" }],
    tags: ["Teaching", "AI", "Machine Learning", "Information Retrieval"],
    date: "Oct 2025 – present · Damascus",
    demoLink: "https://www.aspu.edu.sy/site/english/index.php",
    description: [
      "Teach undergraduate Artificial Intelligence, Machine Learning, Information Retrieval, and Multimedia.",
      "Author tutorial materials, programming assignments, and hands-on coding labs bridging theory to implementation.",
    ],
  },
  {
    imgPath: tp,
    role: "Data Scientist",
    title: "TruePositive",
    summary:
      "Churn and growth analytics on multi-million-record telecom data, plus a graph pipeline rebuilt for a 90% speedup.",
    metrics: [{ value: "90%", label: "faster pipeline" }, { value: "4", label: "analyses delivered" }],
    tags: ["PySpark", "DuckDB", "Superset", "EDA", "LLMs"],
    date: "Feb 2025 – Sep 2025",
    demoLink: "https://www.linkedin.com/company/truepositive-tech/posts/?feedView=all",
    description: [
      "Performed EDA on subscriber activity and revenue data to uncover churn drivers and usage behavior patterns.",
      "Delivered Drip, RFM, Growth, and GEO analyses for MTN Congo.",
      "Built interactive dashboards with Apache Superset for real-time KPI visibility.",
      "Built a Social Network Analysis pipeline on large-scale telecom data, reducing processing time by 90% through a PySpark to DuckDB migration.",
      "Collaborated on projects involving Large Language Models (LLMs).",
    ],
  },
  {
    imgPath: rachis,
    role: "R&D Engineer",
    title: "Rachis Systems",
    summary:
      "Research work across federated learning, biometrics, and routing optimization.",
    metrics: [{ value: "98.7%", label: "MNIST accuracy" }],
    tags: ["Federated Learning", "Differential Privacy", "Meta-Learning"],
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
    role: "Data Engineer",
    title: "Seventh Generation Tech",
    summary:
      "Built and maintained the scraping pipelines feeding IRANK product data.",
    tags: ["Selenium", "BeautifulSoup", "Data Cleaning"],
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
    role: "Data Science Intern",
    title: "SHAI For AI",
    summary:
      "Remote training program in data science principles and statistical modeling.",
    tags: ["Data Analysis", "Machine Learning", "Statistics"],
    date: "Feb 2023 – Apr 2024",
    demoLink: "https://shaiforai.com/",
    description: [
      "Completed a remote training program specializing in data science principles.",
      "Acquired skills in data analysis, machine learning, and statistical modeling.",
    ],
  },
  {
    imgPath: in1minute,
    role: "Research Intern",
    title: "In1Minute",
    summary:
      "Collaborative research with an international cohort.",
    tags: ["Research", "Collaboration"],
    date: "Oct 2022 – Nov 2022",
    description: [
      "Participated in collaborative research with a diverse cohort.",
      "Gained insights from professionals across various backgrounds.",
    ],
  },
];

function Experiences() {
  return (
    <Section
      id="experience"
      kicker="Career"
      title="Where I have worked"
      intro="Roles across AI engineering, data science, and teaching. Expand any card for the detail."
    >
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <RevealWrapper key={index} delay={index * 0.06}>
            <ExperienceCard
              imgPath={exp.imgPath}
              isBlog={false}
              role={exp.role}
              title={exp.title}
              summary={exp.summary}
              metrics={exp.metrics}
              tags={exp.tags}
              description={exp.description}
              date={exp.date}
              demoLink={exp.demoLink}
              ghLink={exp.ghLink}
            />
          </RevealWrapper>
        ))}
      </div>
    </Section>
  );
}

export default Experiences;
