// 'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var cors = require('cors');

var db = require('./config/db');


var allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    return next();
};

app.use(allowCrossDomain);
// app.use(cors());

mongoose.connect(db.url);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile('index.html', { root: './public' });
});

var port = process.env.PORT || 3000;
require('./app/routes/personRoute')(app);


app.listen(port);
console.log("I am listening to you " + port);
