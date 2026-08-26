import React from "react";
import { FaGraduationCap, FaCertificate, FaUsers } from "react-icons/fa";
import RevealWrapper from "../RevealWrapper";
import Section from "../Section";

// NOTE: entries marked `placeholder: true` are scaffolding. Replace the copy
// with real credentials (or delete the entry) — they render with a visible
// "Add details" chip so an unfilled slot can't be mistaken for a real claim.
const EDUCATION = [
  {
    degree: "B.Eng. Artificial Intelligence Engineering",
    org: "Al Sham Private University (ASPU)",
    date: "Graduated",
    note: "Graduation project: FluentFlow, a multi-criteria public speaking evaluation system.",
  },
  {
    degree: "Add your degree",
    org: "Institution name",
    date: "Year – Year",
    note: "Short note on focus, thesis, or standout coursework.",
    placeholder: true,
  },
];

const CERTIFICATES = [
  {
    title: "Data Science Training Program",
    issuer: "SHAI For AI",
    date: "2023 – 2024",
  },
  {
    title: "Add a certificate",
    issuer: "Issuing body",
    date: "Year",
    placeholder: true,
  },
  {
    title: "Add a certificate",
    issuer: "Issuing body",
    date: "Year",
    placeholder: true,
  },
];

const ORGANIZATIONS = [
  {
    name: "ICPC — International Collegiate Programming Contest",
    role: "Contestant",
    date: "2021 – 2023",
    contributions: [
      "12th place, 2021 Al-Baath University Collegiate Programming Contest.",
      "19th place, 2022 ICPC Damascus University Collegiate Programming Contest.",
    ],
  },
  {
    name: "Add an organization",
    role: "Your role",
    date: "Year – Year",
    contributions: ["What you contributed there."],
    placeholder: true,
  },
];

function PlaceholderChip() {
  return <span className="placeholder-chip">Add details</span>;
}

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
                className={`credential-panel ${
                  item.placeholder ? "is-placeholder" : ""
                }`}
              >
                <p className="credential-title">{item.degree}</p>
                <p className="credential-org">{item.org}</p>
                {item.date && (
                  <span className="timeline-date-chip">{item.date}</span>
                )}
                {item.note && <p className="credential-note">{item.note}</p>}
                {item.placeholder && <PlaceholderChip />}
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
                className={`certificate-card ${
                  item.placeholder ? "is-placeholder" : ""
                }`}
              >
                <span className="certificate-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="credential-title">{item.title}</p>
                <p className="credential-org">{item.issuer}</p>
                {item.date && (
                  <span className="timeline-date-chip">{item.date}</span>
                )}
                {item.placeholder && <PlaceholderChip />}
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
                className={`organization-card ${
                  item.placeholder ? "is-placeholder" : ""
                }`}
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
                {item.placeholder && <PlaceholderChip />}
              </div>
            </RevealWrapper>
          ))}
        </div>
    </Section>
  );
}

export default Credentials;
