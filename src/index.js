const express = require('express');
const path = require('path')
const morgan = require('morgan');
const exphbs  = require('express-handlebars');

const app = express();
const port = 3000;

app.use(morgan('combined'));

// template engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

let viewPath = path.join(__dirname, 'resources', 'views');
app.set('views', viewPath);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/san-pham', (req, res) => {
  res.render('product');
})

app.get('/chi-tiet-san-pham', (req, res) => {
  res.render('product-details');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})