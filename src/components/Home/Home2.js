import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaKaggle, FaLinkedinIn, FaMedium } from "react-icons/fa";
import useScrollReveal from "../../hooks/useScrollReveal";

function Home2() {
  const introRef = useScrollReveal();
  const socialRef = useScrollReveal();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div ref={introRef} className="reveal">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am an <b className="purple">AI Engineer</b> and{" "}
                <b className="purple">Data Scientist</b>, currently leading AI
                product delivery at <b className="purple">BeSmart.ai</b>.
                <br />
                <br />
                I take LLM systems all the way to production, from
                <i>
                  <b className="purple">
                    {" "}
                    RAG pipelines and agent platforms{" "}
                  </b>
                </i>
                to the API layer, containers, and release.
                <br />
                <br />
                My daily stack is
                <i>
                  <b className="purple">
                    {" "}
                    Python, FastAPI, PyTorch, LangChain, Qdrant and Docker,{" "}
                  </b>
                </i>
                and on the data side
                <i>
                  <b className="purple"> DuckDB, PySpark and SQL </b>
                </i>
                over multi-million-record datasets.
                <br />
                <br />
                I build <b className="purple">AI products that ship</b>, not
                demos.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <div ref={socialRef} className="reveal">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Yassin522"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/yassin-abdulmahdi/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.kaggle.com/yassinabdulmahdi"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaKaggle />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://medium.com/@Yassin52"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaMedium />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
