import React from "react";
import Typewriter from "typewriter-effect";

// The headline already says "AI Engineer", so this line names the work rather
// than repeating the title.
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "LLM & RAG systems",
          "Agent platforms",
          "Data science at scale",
          "Production ML",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
