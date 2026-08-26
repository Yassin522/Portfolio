import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaKaggle, FaLinkedinIn, FaMedium } from "react-icons/fa";

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

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="site-footer-inner">
          <div>
            <p className="site-footer-name">Yassin Abdulmahdi</p>
            <p className="site-footer-note">
              AI Engineer &amp; Data Scientist · Damascus, Syria
            </p>
          </div>

          <ul className="site-footer-socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="icon-button"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="site-footer-copy">
          © {year} Yassin Abdulmahdi. Designed and built by me.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
