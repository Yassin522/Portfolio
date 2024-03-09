import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiDart,
} from "react-icons/di";
import {
  SiChatbot,
  SiFirebase,
  SiFlutter,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTensorflow,

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDart />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch/>
      </Col>  <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiChatbot/>
      </Col>

    
      
    </Row>
  );
}

export default Techstack;
