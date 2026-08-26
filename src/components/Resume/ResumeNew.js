import React from "react";
import Section from "../Section";
import RevealWrapper from "../RevealWrapper";
import pdf from "../../Assets/Yassin-Abdulmahdi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFileEarmarkPdf, BsArrowUpRight } from "react-icons/bs";

// The CV is no longer rendered inline: react-pdf pulled a worker and a whole
// PDF renderer into the bundle to show a document most visitors would rather
// open in their own viewer. Two links instead — open in a new tab, or download.
function ResumeNew() {
  return (
    <Section
      id="resume"
      kicker="Resume"
      title="My CV"
      intro="Open the full document in a new tab, or grab a copy to keep."
    >
      <RevealWrapper>
        <div className="resume-card">
          <span className="resume-icon">
            <BsFileEarmarkPdf />
          </span>

          <div className="resume-card-body">
            <p className="resume-card-title">Yassin Abdulmahdi — CV</p>
            <p className="resume-card-note">
              AI Engineer &amp; Data Scientist · PDF
            </p>
          </div>

          <div className="resume-actions">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button"
            >
              View CV <BsArrowUpRight style={{ marginLeft: 6 }} />
            </a>
            <a
              href={pdf}
              download="Yassin-Abdulmahdi.pdf"
              className="ghost-button"
            >
              <AiOutlineDownload style={{ marginRight: 6 }} /> Download
            </a>
          </div>
        </div>
      </RevealWrapper>
    </Section>
  );
}

export default ResumeNew;
