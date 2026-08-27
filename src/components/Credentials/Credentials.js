import React from "react";
import { FaGraduationCap, FaCertificate, FaUsers } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import RevealWrapper from "../RevealWrapper";
import Section from "../Section";

const EDUCATION = [
  {
    degree: "B.Eng. Artificial Intelligence Engineering",
    org: "Damascus University",
    date: "Graduated",
    note: "Graduation project: FluentFlow, a multi-criteria public speaking evaluation system.",
  },
];

const CERTIFICATES = [
  {
    title: "Retrieval Augmented Generation (RAG)",
    issuer: "Coursera",
    date: "Issued Sep 2025",
    credentialId: "RABTMOMHZTG3",
  },
  {
    title: "Machine Learning Engineering for Production (MLOps) Specialization",
    issuer: "Coursera",
    date: "Issued Mar 2023",
    credentialId: "8SM44XGLR767",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "Issued Dec 2022",
    credentialId: "9WYG8XSF3HZF",
  },
  {
    title: "Data Science Training Program",
    issuer: "SHAI For AI",
    date: "2023 – 2024",
  },
];

const ORGANIZATIONS = [
  {
    name: "ICPC International Collegiate Programming Contest",
    role: "Contestant",
    date: "2021 – 2023",
    link: "https://icpc.global/ICPCID/I3Z38OJZ7CZT",
    linkLabel: "ICPC profile",
    contributions: [
      "12th place, 2021 Al-Baath University Collegiate Programming Contest.",
      "19th place, 2022 ICPC Damascus University Collegiate Programming Contest.",
    ],
  },
  {
    name: "RBCs Team فريق الكريات الحمراء",
    role: "Tutor (Volunteer)",
    date: "Feb 2021 – Feb 2023",
    contributions: [
      "Delivered a lecture on programming languages to third-year students at Damascus University, focusing on the Flutter framework and integrating front-end and back-end components.",
      "Contributed to the growth and development of Syrian society and university students by providing high-quality educational materials, both online and offline.",
      "Actively participated in the Screen It3 project, aimed at assisting secondary education students in selecting suitable university specializations.",
      "Delivered engaging lectures as part of Screen It3, providing students with theoretical and practical insights to help them make informed decisions about their academic futures.",
      "Empowered and guided students through comprehensive curriculum and practical advice, enhancing their educational experience and future prospects.",
    ],
  },
  {
    name: "Omdena",
    role: "Data Scientist (Volunteer)",
    date: "May 2023 – Dec 2023",
    contributions: [
      "Analyzing Brain Scan Images for the Early Detection and Diagnosis of Alzheimer's Disease: developed a machine learning model to identify patterns in brain scans for early detection.",
      "Focused on achieving high accuracy, efficient processing, and a user-friendly deployment approach to improve diagnosis and patient outcomes.",
      "Building a Conversational AI for Alternative Transportation in France: volunteered with Omdena Ile-de-France to tackle transportation disruption challenges in the region.",
      "Developed a conversational AI chatbot providing citizens with real-time, personalized information on alternative transport options during strikes, improving decision-making during disruptions.",
    ],
  },
];

function Credentials() {
  return (
    <Section
      id="credentials"
      kicker="Background"
      title="Education & credentials"
      intro="Where I studied, what I have certified, and the communities I take part in."
    >

        {/* Education */}
        <RevealWrapper>
          <h2 className="panel-heading">
            <FaGraduationCap className="panel-heading-icon" /> Education
          </h2>
        </RevealWrapper>
        <div className="credentials-grid">
          {EDUCATION.map((item, i) => (
            <RevealWrapper key={item.degree + i} delay={i * 0.08}>
              <div
                className="credential-panel"
              >
                <p className="credential-title">{item.degree}</p>
                <p className="credential-org">{item.org}</p>
                {item.date && (
                  <span className="timeline-date-chip">{item.date}</span>
                )}
                {item.note && <p className="credential-note">{item.note}</p>}
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Certificates */}
        <RevealWrapper>
          <h2 className="panel-heading">
            <FaCertificate className="panel-heading-icon" /> Certificates
          </h2>
        </RevealWrapper>
        <div className="certificate-grid">
          {CERTIFICATES.map((item, i) => (
            <RevealWrapper key={item.title + i} delay={i * 0.06}>
              <div
                className="certificate-card"
              >
                <span className="certificate-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="credential-title">{item.title}</p>
                <p className="credential-org">{item.issuer}</p>
                {item.date && (
                  <span className="timeline-date-chip">{item.date}</span>
                )}
                {item.credentialId && (
                  <p className="credential-id">
                    Credential ID <code>{item.credentialId}</code>
                  </p>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Organizations */}
        <RevealWrapper>
          <h2 className="panel-heading">
            <FaUsers className="panel-heading-icon" /> Organizations
          </h2>
        </RevealWrapper>
        <div className="organization-list">
          {ORGANIZATIONS.map((item, i) => (
            <RevealWrapper key={item.name + i} delay={i * 0.08}>
              <div
                className="organization-card"
              >
                <div className="organization-card-top">
                  <div>
                    <p className="credential-title">{item.name}</p>
                    <p className="credential-org">{item.role}</p>
                  </div>
                  {item.date && (
                    <span className="timeline-date-chip">{item.date}</span>
                  )}
                </div>
                {item.contributions && (
                  <ul className="organization-contributions">
                    {item.contributions.map((c, ci) => (
                      <li key={ci}>{c}</li>
                    ))}
                  </ul>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-link organization-link"
                  >
                    <BsBoxArrowUpRight /> {item.linkLabel || "View profile"}
                  </a>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
    </Section>
  );
}

export default Credentials;
