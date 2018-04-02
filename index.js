const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;


express()
  .use(express.static(path.join(__dirname, '/public/')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/about', (req, res) => res.render('about'))
  .get('/work', (req, res) => res.render('work'))
  .get('/blog', (req, res) => res.render('blog'))
  .get('/contact', (req, res) => res.render('contact'))
  .get('/blogDetail', (req, res) => res.render('blogDetail'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));