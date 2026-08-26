import React, { useCallback, useRef } from "react";
import homeLogo from "../../Assets/main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const PROOF = [
  { value: "4+", label: "Years building AI" },
  { value: "3", label: "AI products shipped" },
  { value: "90%", label: "Pipeline speedup" },
  { value: "4", label: "Courses taught" },
];

// Max rotation in degrees at the card's corners.
const TILT = 9;

function Home() {
  const cardRef = useRef(null);

  const handleMove = useCallback((event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    // Normalise cursor position to -0.5..0.5 across the card, then map to
    // rotation. Y drives rotateX inverted so the card leans toward the cursor.
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--rotate-y", `${px * TILT * 2}deg`);
    card.style.setProperty("--rotate-x", `${-py * TILT * 2}deg`);
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  }, []);

  const scrollTo = (id) => (event) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section>
      <div className="home-section" id="home">
        <Particle />

        <div className="hero-ref">
          <div className="hero-copy-ref">
            <span className="availability">
              <span className="availability-dot" />
              Open to AI engineering roles
            </span>

            <h1>
              <span className="hero-name">Yassin Abdulmahdi</span>
              <em className="text-gradient">AI Engineer</em>
            </h1>

            <div className="hero-type">
              <span className="hero-type-prefix">Working on</span>
              <Type />
            </div>

            <p className="hero-blurb">
              I take LLM systems all the way to production, from RAG pipelines
              and agent platforms to the API layer, containers, and release.
              Currently leading AI product delivery at BeSmart.ai.
            </p>

            <div className="hero-actions-ref">
              <a
                href="#contact"
                className="gradient-button"
                onClick={scrollTo("contact")}
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="ghost-button"
                onClick={scrollTo("projects")}
              >
                View work
              </a>
              <a
                href="https://github.com/Yassin522"
                target="_blank"
                rel="noreferrer"
                className="icon-button"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yassin-abdulmahdi/"
                target="_blank"
                rel="noreferrer"
                className="icon-button"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="proof-cards-wrap">
              {PROOF.map((item) => (
                <div className="proof-card" key={item.label}>
                  <span className="proof-value">{item.value}</span>
                  <span className="proof-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="portrait-stage"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="portrait-card" ref={cardRef}>
              <img src={homeLogo} alt="Yassin Abdulmahdi" />
            </div>
          </div>
        </div>

        <a
          href="#intro"
          className="scroll-down-indicator"
          onClick={scrollTo("intro")}
          aria-label="Scroll down"
        >
          <HiArrowDown />
        </a>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
