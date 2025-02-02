import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Dennis Miring'u</h1>
        <p>Full-Stack Developer | Tech Enthusiast</p>
        <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;