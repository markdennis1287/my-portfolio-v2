import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://my-portfolio-v2-v9w0.onrender.com/api/blogs', {
        withCredentials: true,
      })
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <h2 className="section-title">Blogs</h2>
        <p className="section-subtitle">
          Explore my thoughts and insights on web development, programming, and technology.
          <br></br>
          Each blog post is a deep dive into topics I'm passionate about.
        </p>
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
          Read More Blogs
        </Link>
      </div>
    </section>
  );
};

export default Blogs;