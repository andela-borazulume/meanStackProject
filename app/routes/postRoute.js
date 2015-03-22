var postController = require("../controllers/postController");
var PostModel = require("../models/postModel");
var mongoose = require("mongoose");

module.exports = function(app){
	var express = require("express");
	var router = express.Router();

	app.use('/api', router);

	router.use(function(req, res, next){
		console.log("Hit me");
		next();

	});

		router.route('/posts').
		get( postController.getPosts ); 

		router.route('/posts/:post_id').
		get( postController.getPostById).
		put( postController.updatePost).
		delete( postController.deletePost);

};

