// frontend/src/components/About.jsx
import React from 'react';
import Testimonials from "./Testimonials";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaPython, FaGithub, FaNetworkWired } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiFlask, SiLinux } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Left Side: Content */}
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="intro">
            I am a passionate developer with a love for building scalable and user-friendly applications.
          </p>
          <p className="details">
            I specialize in full-stack development, with expertise in React, Node.js, and modern web technologies. Over the years, I’ve worked on a variety of projects, from small startups to large-scale applications, and I’m always eager to learn and adapt to new challenges.
          </p>

          {/* Tools and Technologies */}
          <div className="tools-section">
            <h3 className="tools-title">Tools & Technologies</h3>
            <div className="tools-grid">
              <div className="tool" title="React">
                <FaReact className="icon" />
              </div>
              <div className="tool" title="Node.js">
                <FaNodeJs className="icon" />
              </div>
              <div className="tool" title="JavaScript">
                <FaJs className="icon" />
              </div>
              <div className="tool" title="Tailwind CSS">
                <SiTailwindcss className="icon" />
              </div>
              <div className="tool" title="HTML5">
                <FaHtml5 className="icon" />
              </div>
              <div className="tool" title="CSS3">
                <FaCss3Alt className="icon" />
              </div>
              <div className="tool" title="MySQL">
                <SiMysql className="icon" />
              </div>
              <div className="tool" title="Python">
                <FaPython className="icon" />
              </div>
              <div className="tool" title="Git">
                <FaGitAlt className="icon" />
              </div>
              <div className="tool" title="GitHub">
                <FaGithub className="icon" />
              </div>
              <div className="tool" title="Docker">
                <FaDocker className="icon" />
              </div>
              <div className="tool" title="Flask">
                <SiFlask className="icon" />
              </div>
              <div className="tool" title="Linux">
                <SiLinux className="icon" />
              </div>
              <div className="tool" title="Networks">
                <FaNetworkWired className="icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="about-visual">
          <img src="/logo.png" alt="About Me" className="about-image" />
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default About;