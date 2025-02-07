import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://curly-couscous-pj74r5w5jw7q26q7g-5000.app.github.dev/api/projects', {
        withCredentials: true,
      })
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on.
          <br></br>
          Each project showcases my skills in web development, problem-solving, and creativity.
        </p>
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
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
        <Link to="/projects" className="see-more-button">
          See More Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;