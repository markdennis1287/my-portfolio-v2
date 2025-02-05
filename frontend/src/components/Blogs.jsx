import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = () => {
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
    <section id="blogs" className="blogs">
      <div className="container">
        <h2 className="section-title">Blogs</h2>
        <div className="blogs-grid">
          {blogs.slice(0, 3).map((blog) => (
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
        <Link to="/blogs" className="see-more-button">
          See More
        </Link>
      </div>
    </section>
  );
};

export default Blogs;