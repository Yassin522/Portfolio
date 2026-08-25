import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaKaggle, FaLinkedinIn, FaMedium } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yassin Abdulmahdi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Yassin Abdulmahdi</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Yassin522"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
         
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yassin-abdulmahdi/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.kaggle.com/yassinabdulmahdi"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle"
              >
                <FaKaggle />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://medium.com/@Yassin52"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMedium />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
