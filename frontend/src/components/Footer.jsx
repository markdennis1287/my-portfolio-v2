import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Left Section: Get in Touch */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Let's work together! Reach out to me via email or connect on social media.</p>
          <a href="mailto:dennismiringu03@gmail.com" className="footer-email">
            dennismiringu03@gmail.com
          </a>
          <div className="social-links">
            <a
              href="https://github.com/markdennis1287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/dennis-miring-u/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://twitter.com/lucd_ville?s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/dps_mdm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-section">
          <h3>Site map</h3>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section: CTA */}
        <div className="footer-section">
          <h3>Let's Collaborate</h3>
          <p>
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Dennis Miring'u. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;