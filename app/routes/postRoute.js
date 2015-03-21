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

	router.route('/categories/:category_id/posts').
		post(postController.createPosts).
		get(postController.postsByCategory);


		router.route('/posts').
		get( postController.getPosts ); 


	// router.route('/posts/category/:category_id/post').
	// post(function(req, res){
	// 	var postmodel = new PostModel();
	// 	postmodel.content = req.body.content;
	// 	postmodel.save(function(err){
	// 		if(err){
	// 			res.status(500).send(err);
	// 		}

	// 		else {
	// 			res.json({
	// 				message: "The information has been posted"
	// 			});
	// 		}

	// 	});

	// });  /* To get posts of users of a particular category */
	// get(function(req, res){
	// 	PostModel.find(function(err, posts){
	// 		if (err) {
	// 			res.status(500).send(err);

	// 		}

	// 		else {
	// 			res.json(posts);
	// 		}

	// 	});

	// });
};