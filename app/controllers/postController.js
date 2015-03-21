var PostModel = require('../models/postModel');
var Category = require('../models/categoryModel');
var categoryController = require('../controllers/categoryController');

exports.createPosts = function(req, res){

		categoryController.findOne(req, res, function (){

			var category = req.category;
			var posts = new PostModel();
		posts.content = req.body.content;

		posts.save(function(err){
			if(err){
				res.send(err, posts);

			}

			else {
				category.posts.push(posts);
				category.save(function(err, posts){
					if(err){
						res.send(err);

					}
					else{
						res.json(posts);
					}

				});
				
			}
		});

	});
};

exports.postsByCategory = function(req, res){
	console.log(req.params.category_id);
	PostModel.where('category', req.params.category_id);

};

exports.getPosts = function(req, res){
		PostModel.find(function(err, posts){
			if(err){
				res.status(500).send(err);

			}

			else{
				res.json(posts);
			}

		});



	};