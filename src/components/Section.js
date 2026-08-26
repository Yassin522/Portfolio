import React from "react";

// Shared section wrapper matching the reference layout system: a 1180px shell
// with 28px gutters, 116px vertical rhythm, and an optional uppercase kicker
// above the heading.
function Section({ id, kicker, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`section-space ${className}`}>
      <div className="section-shell">
        {(kicker || title || intro) && (
          <header className="section-head">
            {kicker && <span className="section-kicker">{kicker}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {intro && <p className="section-intro">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
