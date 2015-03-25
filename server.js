// 'use strict';

var express = require('express'),
 	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	session = require('express-session'),
	cookieParser = require('cookie-parser');
	db = require('./config/db');


var allowCrossDomain = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  return next();
};

app.use(allowCrossDomain);
// app.use(cors());

require('./app/models/userModel');

mongoose.connect(db.url);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
// app.use(session());
app.use(session({ secret: 'iloveprogrammingwhataboutyou' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.get('/', function(req, res){
	res.sendFile('index.html', { root: './public' });
});

var port = process.env.PORT || 3000;

//routes
require('./app/routes/userRoute')(app, passport);
require('./app/routes/categoryRoute')(app);
require('./app/routes/postRoute')(app);

//passport
require('./config/passport')(passport);

app.listen(port);
console.log("I am listening to you " + port);
