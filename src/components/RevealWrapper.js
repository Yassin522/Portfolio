import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

function RevealWrapper({ children, delay = 0, className = "", style = {} }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

export default RevealWrapper;
