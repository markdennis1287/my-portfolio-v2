const express = require('express');
const axios = require('axios');
const Parser = require('rss-parser');
const cheerio = require('cheerio');
const router = express.Router();

const projects = [
  {
    id: 1,
    name: 'Customer Segmentation',
    description: 'Still in development project for clustering customers that have demographic similarities.',
    image: '/customer-seg.png',
    githubLink: 'https://github.com/markdennis1287/Customer-Segmentation',
    liveLink: 'https://customer-segmentation-o8ml.onrender.com',
    tags: ['Python', 'Data Analysis', 'Machine Learning'],
  },
  {
    id: 2,
    name: 'My First Portfolio',
    description: 'This was my first portfolio website that I built and my first project using React.',
    image: '/my-portfolio.png',
    githubLink: 'https://github.com/markdennis1287/my-portfolio',
    liveLink: 'https://dennism.vercel.app/',
    tags: ['React', 'Node.js', ' Tailwind CSS'],
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Description of Project 3',
    image: '/my-portfolio.jpg',
    githubLink: 'https://github.com/yourusername/project3',
    liveLink: 'https://project3.com',
    tags: ['Python', 'Data Analysis', 'Machine Learning'],
  },
];


router.get('/projects', (req, res) => {
  res.json(projects);
});



const parser = new Parser();

const fetchMediumBlogs = async () => {
  const mediumRSSUrl = 'https://medium.com/feed/@dennismiringu';
  try {
    const feed = await parser.parseURL(mediumRSSUrl);
    return feed.items.map((item, index) => {
      const $ = cheerio.load(item['content:encoded']);
      const imageUrl = $('img').first().attr('src') || '/default-blog-image.jpg';
      const tags = item.categories || [];
      return {
        id: index + 1,
        title: item.title,
        description: item.contentSnippet,
        link: item.link,
        pubDate: item.pubDate,
        image: imageUrl,
        tags: tags,
      };
    });
  } catch (error) {
    console.error('Error fetching Medium blogs:', error);
    return [];
  }
};

router.get('/blogs', async (req, res) => {
  const blogs = await fetchMediumBlogs();
  res.json(blogs);
});


module.exports = router;