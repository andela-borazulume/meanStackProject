var PostModel = require('../models/postModel');
var Category = require('../models/categoryModel');

exports.createPosts = function(req, res){
    var category = req.category;
    var posts = new PostModel(req.body);
    posts.user = req.params.user_id;
    posts.category = req.params.category_id;
  

  posts.save(function(err){
    if(err){
      res.send(err, posts);

    }   
    else{
      res.json(posts);
    }

  });
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

exports.getPostById = function(req, res){
			PostModel.findById(req.params.post_id, function(err, posts){
				if(err){
					res.send();

				}

				else {
					res.json(posts);
				}

			});

		};

exports.updatePost = function(req, res){
			PostModel.findById(req.params.post_id, function(err, posts){
				var post = new PostModel(req.body);
				if(err){
					res.send(err);
				}

				else {
					post.save(function(err, posts){
						if(err){
							res.send(err);
						}
						else {
							res.json(posts);
						}
					});
				}
			});
		};

exports.deletePost = function(req, res) {
	 		PostModel.remove({
	 	  _id: req.params.post_id
	  	}, function(err, post) {
	    if (err) {
	      res.send(err);

	    } else {
	      res.json({
	          message: "It has been deleted"
	      });
	    }

	  });
	};
