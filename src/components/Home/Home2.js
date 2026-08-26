import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaKaggle, FaLinkedinIn, FaMedium } from "react-icons/fa";
import RevealWrapper from "../RevealWrapper";

const SOCIALS = [
  { href: "https://github.com/Yassin522", label: "GitHub", icon: <AiFillGithub /> },
  {
    href: "https://www.linkedin.com/in/yassin-abdulmahdi/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.kaggle.com/yassinabdulmahdi",
    label: "Kaggle",
    icon: <FaKaggle />,
  },
  { href: "https://medium.com/@Yassin52", label: "Medium", icon: <FaMedium /> },
];

// Narrow band between the hero and About: a one-line positioning statement
// plus the social row, rather than a second full intro block.
function Home2() {
  return (
    <div className="intro-band" id="intro">
      <div className="section-shell">
        <RevealWrapper>
          <div className="intro-band-inner">
            <p className="intro-statement">
              I build <b>AI products that ship</b>, not demos.
            </p>

            <ul className="intro-socials">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="icon-button"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default Home2;
