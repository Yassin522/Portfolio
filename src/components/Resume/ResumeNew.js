import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Yassin-Abdulmahdi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Pin the worker to the exact pdfjs build react-pdf ships with, so a version
// bump can't leave us pointing at a CDN path that 404s.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function DownloadButton() {
  return (
    <Button
      variant="primary"
      href={pdf}
      download="Yassin-Abdulmahdi.pdf"
      style={{ maxWidth: "250px" }}
    >
      <AiOutlineDownload />
      &nbsp;Download CV
    </Button>
  );
}

function ResumeNew() {
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 1200 : window.innerWidth
  );
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scale = width > 786 ? 1.7 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton />
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex flex-column align-items-center"
            onLoadSuccess={({ numPages: total }) => setNumPages(total)}
          >
            {Array.from({ length: numPages || 0 }, (_, index) => (
              <Page key={index} pageNumber={index + 1} scale={scale} />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
