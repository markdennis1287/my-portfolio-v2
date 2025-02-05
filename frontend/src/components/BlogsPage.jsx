import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://curly-couscous-pj74r5w5jw7q26q7g-5000.app.github.dev/api/blogs', {
        withCredentials: true,
      })
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <section id="blogs-page" className="blogs-page">
      <div className="container">
        <h2 className="section-title">All Blogs</h2>
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog-links">
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
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

export default BlogsPage;