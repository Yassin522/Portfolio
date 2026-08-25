import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiReact, DiGit, DiPython } from "react-icons/di";
import {
  SiOpencv,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
  SiDocker,
  SiDjango,
  SiPandas,
  SiPostgresql,
  SiNumpy,
  SiFastapi,
  SiDuckdb,
  SiApachespark,
  SiRailway,
  SiOpenai,
} from "react-icons/si";

// react-icons 4.8 has no LangChain or Qdrant glyph, so those two render as
// text chips sized down to fit the same 4.5em icon box.
const stack = [
  { label: "Python", icon: <DiPython /> },
  { label: "C++", icon: <CgCPlusPlus /> },
  { label: "PyTorch", icon: <SiPytorch /> },
  { label: "TensorFlow", icon: <SiTensorflow /> },
  { label: "scikit-learn", icon: <SiScikitlearn /> },
  { label: "OpenCV", icon: <SiOpencv /> },
  { label: "LLMs", icon: <SiOpenai /> },
  { label: "LangChain", text: "LangChain" },
  { label: "Qdrant", text: "Qdrant" },
  { label: "FastAPI", icon: <SiFastapi /> },
  { label: "Django", icon: <SiDjango /> },
  { label: "React", icon: <DiReact /> },
  { label: "Pandas", icon: <SiPandas /> },
  { label: "NumPy", icon: <SiNumpy /> },
  { label: "DuckDB", icon: <SiDuckdb /> },
  { label: "PySpark", icon: <SiApachespark /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "Docker", icon: <SiDocker /> },
  { label: "Railway", icon: <SiRailway /> },
  { label: "Git", icon: <DiGit /> },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stack.map((item) => (
        <Col
          xs={4}
          md={2}
          key={item.label}
          className="tech-icons"
          title={item.label}
        >
          {item.icon || <span className="tech-text">{item.text}</span>}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
