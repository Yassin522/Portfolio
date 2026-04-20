import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import RevealWrapper from "../RevealWrapper";
import { AiFillGithub } from "react-icons/ai";
import { FaKaggle, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container style={{ maxWidth: "700px" }}>
        <RevealWrapper>
          <h1 className="project-heading">
            Get In <strong className="purple">Touch</strong>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", marginTop: "16px" }}>
            Whether you have an opportunity, a project idea, or just want to say hi —
            my inbox is always open.
          </p>

          <a
            href="mailto:yassin.abdulmahdi@gmail.com"
            className="contact-email-btn"
          >
            <HiOutlineMail style={{ marginRight: "8px", fontSize: "1.2rem", verticalAlign: "middle" }} />
            Say Hello
          </a>
        </RevealWrapper>

        <RevealWrapper delay={0.2} style={{ marginTop: "50px" }}>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>
            You can also find me on
          </p>
          <ul className="home-about-social-links" style={{ justifyContent: "center", display: "flex", gap: "8px", listStyle: "none", padding: 0 }}>
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
        </RevealWrapper>
      </Container>
    </Container>
  );
}

export default Contact;
