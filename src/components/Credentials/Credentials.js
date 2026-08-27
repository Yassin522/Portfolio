import React, { useState } from "react";
import { FaGraduationCap, FaCertificate, FaUsers } from "react-icons/fa";
import { BsBoxArrowUpRight, BsChevronDown } from "react-icons/bs";
import RevealWrapper from "../RevealWrapper";
import Section from "../Section";

import icpc from "../../Assets/Organizations/1655632229271.jpeg";
import studyCorner from "../../Assets/Organizations/1673608469769.jpeg";
import rbcs from "../../Assets/Organizations/1718564866224.jpeg";
import syriaDataScience from "../../Assets/Organizations/1751184209469.jpeg";

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
    imgPath: syriaDataScience,
    name: "Syria Data Science",
    role: "Community Member",
    contributions: [
      "Part of an inclusive community advancing data science and analytics in Syria, connecting practitioners, researchers, and newcomers.",
      "Supports knowledge-sharing, mentorship, and community-led initiatives that equip people with data skills for real-world problems.",
    ],
  },
  {
    imgPath: icpc,
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
    imgPath: studyCorner,
    name: "Study Corner Project — Damascus University",
    role: "Volunteer Lecturer",
    contributions: [
      "Taught programming and the Flutter framework to third-year students as part of a volunteer initiative offering supplementary lectures.",
      "Supported students with the resources and mentoring they needed to progress toward their academic goals.",
    ],
  },
  {
    imgPath: rbcs,
    name: "RBCs Team فريق الكريات الحمراء",
    role: "Tutor (Volunteer)",
    date: "Feb 2021 – Feb 2023",
    contributions: [
      "Lectured third-year Damascus University students on programming and the Flutter framework, covering front-end and back-end integration.",
      "Produced online and offline educational material for Syrian university students.",
      "Contributed to Screen It3, guiding secondary students toward suitable university specializations through lectures and practical advice.",
    ],
  },
  {
    name: "Omdena",
    role: "Data Scientist (Volunteer)",
    date: "May 2023 – Dec 2023",
    contributions: [
      "Built a machine learning model to detect Alzheimer's patterns in brain scans, tuned for accuracy, efficient processing, and practical deployment.",
      "Developed a conversational AI chatbot with Omdena Ile-de-France giving citizens real-time guidance on alternative transport during strikes.",
    ],
  },
];

const ORGANIZATIONS_PREVIEW_COUNT = 3;

function Credentials() {
  const [showAllOrganizations, setShowAllOrganizations] = useState(false);
  const visibleOrganizations = showAllOrganizations
    ? ORGANIZATIONS
    : ORGANIZATIONS.slice(0, ORGANIZATIONS_PREVIEW_COUNT);
  const hiddenOrganizationCount =
    ORGANIZATIONS.length - ORGANIZATIONS_PREVIEW_COUNT;

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
            <FaUsers className="panel-heading-icon" /> Organizations & Activities
          </h2>
        </RevealWrapper>
        <div className="organization-list">
          {visibleOrganizations.map((item, i) => (
            <RevealWrapper key={item.name + i} delay={i * 0.08}>
              <div
                className={`organization-card${
                  item.imgPath ? " organization-card-with-media" : ""
                }`}
              >
                <div className="organization-card-body">
                  <div className="organization-card-main">
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
                  {item.imgPath && (
                    <img
                      className="organization-media"
                      src={item.imgPath}
                      alt={item.name}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
        {hiddenOrganizationCount > 0 && (
          <div className="organization-toggle-wrap">
            <button
              type="button"
              className="organization-toggle"
              onClick={() => setShowAllOrganizations((prev) => !prev)}
              aria-expanded={showAllOrganizations}
            >
              {showAllOrganizations
                ? "Show less"
                : `Show ${hiddenOrganizationCount} more`}
              <BsChevronDown
                className={`organization-toggle-icon${
                  showAllOrganizations ? " is-open" : ""
                }`}
              />
            </button>
          </div>
        )}
    </Section>
  );
}

export default Credentials;
