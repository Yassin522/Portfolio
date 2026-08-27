import React from "react";
import Section from "../Section";
import RevealWrapper from "../RevealWrapper";
import laptopImg from "../../Assets/-2147483648_-220529.jpg";

// Skills grouped by what they're used for, rather than a flat wall of logos.
const SKILL_GROUPS = [
  {
    title: "Generative AI",
    items: ["LLMs", "RAG pipelines", "LangChain", "Qdrant", "MCP", "Agents"],
  },
  {
    title: "ML & Data Science",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Pandas", "NumPy"],
  },
  {
    title: "Backend & Delivery",
    items: ["Python", "FastAPI", "Django", "Docker", "PostgreSQL", "Railway"],
  },
  {
    title: "Data at Scale",
    items: ["DuckDB", "PySpark", "SQL", "Superset", "Selenium"],
  },
];

function About() {
  return (
    <Section
      id="about"
      kicker="About"
      title="Know who I am"
      intro="AI Engineer from Damascus, Syria, building production LLM systems and teaching the next group of engineers."
    >
      <div className="about-layout">
        <div className="about-copy">
          <RevealWrapper>
            <h3>
              I take LLM systems from <b>architecture to production</b>.
            </h3>
            <p>
              At <b>BeSmart.ai</b> I lead a small engineering team shipping
              generative AI SaaS products: RAG pipelines, no-code agent
              platforms, and multi-tenant architecture. I own the full path from
              model selection and retrieval design through the API layer,
              containerization, and release.
            </p>
            <p>
              Alongside that I work as a <b>Data Scientist</b>, with experience
              on multi-million-record telecom data: churn analysis, large-scale
              graph pipelines, and dashboards that give client teams real
              visibility.
            </p>
            <p>
              I also teach AI, Machine Learning, and Information Retrieval as a
              Teaching Assistant at Al Sham Private University.
            </p>
            <p className="about-quote">
              "Strive to build things that make a difference."
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.1} className="about-media">
          <div className="about-photo-frame">
            <img src={laptopImg} alt="Yassin Abdulmahdi" />
          </div>
        </RevealWrapper>
      </div>

      <div className="about-applied-skills">
        {SKILL_GROUPS.map((group, i) => (
          <RevealWrapper key={group.title} delay={i * 0.07}>
            <div className="about-skill-group">
              <h4>{group.title}</h4>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </Section>
  );
}

export default About;
