import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://my-portfolio-v2-v9w0.onrender.com/api/projects', {
        withCredentials: true,
      })
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    
    <section id="projects-page" className="projects-page">
      {/* Logo in the top-left corner (not a link) */}
      

      <div className="container">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
        <h2 className="section-title">All Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="back-button">
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPage;