import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experience/Experiences";
import Credentials from "./components/Credentials/Credentials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HashRedirect from "./components/HashRedirect";
import BackToTop from "./components/BackToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// The whole portfolio is one scrolling page. The old per-page routes are kept
// only so existing links (/project, /about, ...) still resolve; they redirect
// to the matching anchor rather than rendering a separate screen.
function OnePage() {
  return (
    <>
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Credentials />
      <Resume />
      <Contact />
    </>
  );
}

const LEGACY_ROUTES = {
  "/about": "about",
  "/project": "projects",
  "/experience": "experience",
  "/credentials": "credentials",
  "/resume": "resume",
  "/contact": "contact",
};

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <HashRedirect ready={!load} />
        <Routes>
          <Route path="/" element={<OnePage />} />
          {Object.entries(LEGACY_ROUTES).map(([path, id]) => (
            <Route
              key={path}
              path={path}
              element={<Navigate to={`/#${id}`} replace />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
