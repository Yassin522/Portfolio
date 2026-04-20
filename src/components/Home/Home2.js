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
                Highly motivated and skilled Computer Science Graduate with hands-on experience
                in Data Science
                <br />
                <br />I am fluent in
                <i>
                  <b className="purple"> Python, Machine learning and Data Analysis. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">AI-driven Solutions </b>
                </i>
                <br />
                <br />
                Committed to applying innovative solutions to real-world challenges
                with <b className="purple">AI</b>
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
