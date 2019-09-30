const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'wefwefwefdcscw',
      title: 'First server side post',
      message: 'This content is coming from the server.'
    },
    {
      id: '46h46h54ere4',
      title: 'Second server side post',
      message: 'This content is coming from the server.'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});

module.exports = app;
