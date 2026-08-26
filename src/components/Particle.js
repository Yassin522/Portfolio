import React, { useEffect, useRef } from "react";

// Hand-rolled drifting particle field. This replaces react-tsparticles, which
// pulled ~90kB gzipped for what amounts to a few hundred moving dots, and is no
// longer maintained. Honours prefers-reduced-motion by rendering a static field.
const DENSITY = 1 / 14000; // particles per px^2
const MAX_PARTICLES = 140;

function Particle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let particles = [];
    let frame;
    let width = 0;
    let height = 0;

    const seed = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        MAX_PARTICLES,
        Math.round(width * height * DENSITY)
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        vx: Math.random() * 0.12 + 0.02,
        vy: (Math.random() - 0.5) * 0.05,
        a: Math.random() * 0.35 + 0.08,
        // Each dot breathes at its own rate so the field never pulses in unison.
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.25,
      }));
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          // Wrap rather than bounce, so drift stays uniformly rightward.
          if (p.x > width + p.r) p.x = -p.r;
          if (p.y > height + p.r) p.y = -p.r;
          if (p.y < -p.r) p.y = height + p.r;
        }
        const twinkle = reduced
          ? p.a
          : p.a * (0.65 + 0.35 * Math.sin(t / 1000 * p.speed + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${twinkle})`;
        ctx.fill();
      }
      frame = window.requestAnimationFrame(draw);
    };

    seed();
    if (reduced) {
      draw(0);
      window.cancelAnimationFrame(frame);
    } else {
      frame = window.requestAnimationFrame(draw);
    }

    // Reseeding on every resize pixel would thrash; debounce it.
    let resizeTimer;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(seed, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}

export default Particle;
