const express = require('express');
const path = require('path')
const morgan = require('morgan');
const exphbs  = require('express-handlebars');

const route = require('./routes');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.urlencoded(
  {
    extended: true
  }
));
app.use(express.json());

// template engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

let viewPath = path.join(__dirname, 'resources', 'views');
app.set('views', viewPath);

app.use(express.static(path.join(__dirname, 'public')));

// Route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})