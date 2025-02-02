const express = require('express');
const router = express.Router();

// Example data
const projects = [
  { id: 1, name: 'Project 1', description: 'Description of Project 1' },
  { id: 2, name: 'Project 2', description: 'Description of Project 2' },
];

const blogs = [
  { id: 1, title: 'Blog 1', content: 'Content of Blog 1' },
  { id: 2, title: 'Blog 2', content: 'Content of Blog 2' },
];


router.get('/projects', (req, res) => {
  res.json(projects);
});


router.get('/blogs', (req, res) => {
  res.json(blogs);
});


router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.status(200).json({ message: 'Message received!' });
});

module.exports = router;