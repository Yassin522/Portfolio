import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ position: "relative" }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header fade-in-left">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm{" "}
                <strong className="main-name">Yassin Abdulmahdi</strong>
              </h1>

              <div className="home-type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }} className="fade-in-right">
              <div className="hero-img-frame">
                <img src={homeLogo} alt="Yassin Abdulmahdi" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="scroll-down-indicator">↓</div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
