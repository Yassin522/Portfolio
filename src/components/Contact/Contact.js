import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import RevealWrapper from "../RevealWrapper";
import Section from "../Section";
import { AiFillGithub } from "react-icons/ai";
import { FaKaggle, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const EMAIL = "yasinalmhdi8@gmail.com";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = (process.env.REACT_APP_WEB3FORMS_KEY || "").trim();
const GENERIC_ERROR = "Something went wrong sending that.";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

function validate({ name, email, subject, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please tell me your name.";
  if (!email.trim()) {
    errors.email = "An email is needed so I can reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
    errors.email = "That email address doesn't look right.";
  }
  if (!subject.trim()) errors.subject = "Add a short subject.";
  if (message.trim().length < 20) {
    errors.message = "A little more detail, please. At least 20 characters.";
  }
  return errors;
}

function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState(GENERIC_ERROR);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Without a key the API rejects every request, so say so plainly rather
    // than letting it look like a transient network failure.
    if (!ACCESS_KEY) {
      setErrorMessage(
        "The contact form is not configured yet (missing REACT_APP_WEB3FORMS_KEY)."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const { data } = await axios.post(
        WEB3FORMS_ENDPOINT,
        {
          access_key: ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: `Portfolio: ${form.subject.trim()}`,
          message: form.message.trim(),
          from_name: "Portfolio contact form",
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data && data.success) {
        setForm(EMPTY_FORM);
        setStatus("success");
      } else {
        setErrorMessage((data && data.message) || GENERIC_ERROR);
        setStatus("error");
      }
    } catch (err) {
      const apiMessage = err.response && err.response.data && err.response.data.message;
      setErrorMessage(apiMessage || GENERIC_ERROR);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Get in touch"
      intro="Whether it's a role, an AI product you want built, or a research idea worth exploring, send it over and I'll get back to you."
    >
      <div className="contact-layout">
        <RevealWrapper delay={0.15}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Web3Forms honeypot: hidden from people, tempting to bots. */}
            <input
              type="checkbox"
              name="botcheck"
              className="contact-honeypot"
              tabIndex="-1"
              autoComplete="off"
            />

            <Row>
              <Col md={6}>
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? "has-error" : ""}
                  />
                  {errors.name && (
                    <span className="contact-error">{errors.name}</span>
                  )}
                </div>
              </Col>
              <Col md={6}>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "has-error" : ""}
                  />
                  {errors.email && (
                    <span className="contact-error">{errors.email}</span>
                  )}
                </div>
              </Col>
            </Row>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                className={errors.subject ? "has-error" : ""}
              />
              {errors.subject && (
                <span className="contact-error">{errors.subject}</span>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tell me a bit about it…"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? "has-error" : ""}
              />
              {errors.message && (
                <span className="contact-error">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="contact-submit" disabled={sending}>
              <HiOutlineMail className="contact-submit-icon" />
              {sending ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="contact-status contact-status-success">
                Thanks, your message is on its way. I'll reply to the address
                you gave.
              </p>
            )}

            {status === "error" && (
              <p className="contact-status contact-status-error">
                {errorMessage} You can reach me directly at{" "}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            )}
          </form>
        </RevealWrapper>

        <RevealWrapper delay={0.3} className="contact-aside">
          <span className="contact-aside-kicker">Direct</span>
          <p className="contact-alt">
            Prefer your own mail client?{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>

          <p className="contact-social-label">You can also find me on</p>
          <ul className="contact-social-links">
            <li>
              <a
                href="https://github.com/Yassin522"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-button"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yassin-abdulmahdi/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="icon-button"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.kaggle.com/yassinabdulmahdi"
                target="_blank"
                rel="noreferrer"
                aria-label="Kaggle"
                className="icon-button"
              >
                <FaKaggle />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@Yassin52"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
                className="icon-button"
              >
                <FaMedium />
              </a>
            </li>
          </ul>
        </RevealWrapper>
      </div>
    </Section>
  );
}

export default Contact;
