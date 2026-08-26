import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineExperiment,
  AiOutlineMail,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "home", label: "Home", icon: <AiOutlineHome /> },
  { id: "about", label: "About", icon: <AiOutlineUser /> },
  { id: "experience", label: "Experience", icon: <AiOutlineExperiment /> },
  { id: "projects", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
  { id: "credentials", label: "Credentials", icon: <FaGraduationCap /> },
  { id: "resume", label: "Resume", icon: <CgFileDocument /> },
  { id: "contact", label: "Contact", icon: <AiOutlineMail /> },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => updateNavbar(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy. rootMargin pulls the detection line down below the fixed
  // navbar and up from the bottom, so the "current" section is the one
  // actually filling the viewport rather than one barely peeking in.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: [0.1, 0.5] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => (event) => {
    event.preventDefault();
    updateExpanded(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="brand-name brand-mark" onClick={goTo("home")}>
          <b className="text-gradient">YA</b>
          <span className="brand-full">Yassin Abdulmahdi</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {SECTIONS.map(({ id, label, icon }) => (
              <Nav.Item key={id}>
                <Nav.Link
                  href={`#${id}`}
                  onClick={goTo(id)}
                  className={active === id ? "nav-active" : ""}
                >
                  <span style={{ marginBottom: "2px" }}>{icon}</span> {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item>
              <Nav.Link
                href="https://medium.com/@Yassin52"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="d-flex align-items-center">
              <ThemeToggle />
            </Nav.Item>

            <Nav.Item className="cta-btn">
              <Button
                href="#contact"
                className="cta-btn-inner"
                onClick={goTo("contact")}
              >
                Hire Me
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
