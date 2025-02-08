import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvPath = '/Dennis_Miringu_Resume.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Dennis_Miringu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToNextSection = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="availability">
            <span className="ping-dot"></span>
            <span>Available for work</span>
          </div>

          <h1 className="greeting">
            Hi, I’m <span className="name">Dennis Miring'u</span>
          </h1>
          <p className="tagline">Software Engineer | Full Stack web developer</p>

          {/* Buttons */}
          <div className="button-container">
            <button className="cta-button" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="cta-button secondary" onClick={scrollToNextSection}>
              Next Section ↓
            </button>
          </div>
        </div>

        {/* Right Side: Divided into 3 sections */}
        <div className="hero-right">
          {/* Wrapper for description & image */}
          <div className="hero-content-wrapper">
            {/* Left 1/5: Personal Info with Background Image */}
            <div className="brief-description">
              <h2 className="brief-name">Dennis Miring'u</h2>
              <p className="brief-location">
                <FaMapMarkerAlt className="location-icon" /> Nairobi, Kenya
              </p>
              <div className="skill-container">
                <span className="skill">React</span>
                <span className="skill">Node.js</span>
                <span className="skill">Python</span>
              </div>
            </div>

            {/* Right 3/5: Image */}
            <div className="hero-image-container">
              <img src="/myself-ish.jpg" alt="Dennis Miring'u" className="hero-image" />
            </div>
          </div>

          {/* Bottom 1/5: Social Links */}
          <div className="social-links">
            <a href="https://github.com/markdennis1287" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/dennis-miring-u/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/lucd_ville?s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com/dps_mdm" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
