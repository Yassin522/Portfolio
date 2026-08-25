import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGooglecolab,
  SiJupyter,
  SiLinux,
  SiPostman,
  SiFlutter,
} from "react-icons/si";

const tools = [
  { label: "VS Code", icon: <SiVisualstudiocode /> },
  { label: "Jupyter", icon: <SiJupyter /> },
  { label: "Google Colab", icon: <SiGooglecolab /> },
  { label: "Linux", icon: <SiLinux /> },
  { label: "Postman", icon: <SiPostman /> },
  { label: "Flutter", icon: <SiFlutter /> },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col
          xs={4}
          md={2}
          key={tool.label}
          className="tech-icons"
          title={tool.label}
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
