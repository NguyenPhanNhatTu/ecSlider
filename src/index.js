require('dotenv').config();
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 8000;
const route = require('./routes');
const methodOverride = require('method-override')
const db= require('./config/db');
var admin = require("firebase-admin");
const uuid = require('uuid-v4');
const siteRouter = require('./routes/site');
//connnect 
db.connect();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, '/public')));
//Template engine
app.engine('hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
// route(app);
app.use('/', siteRouter);
app.listen(port, () => {
  console.log(`Server is running`,port);
});

 


