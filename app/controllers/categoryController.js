var Category = require('../models/categoryModel');
var User = require('../models/userModel');
var PostModel = require("../models/postModel");

exports.createCategory = function(req, res) {
  var category = new Category(req.body);

  category.save(function(err) {
    if (err) {
       res.send(err);

    } else {
      res.json(req.body);
    }
  });
};

exports.allCategories = function(req, res) {
  Category.find(function(err, category) {
    if (err) {
        res.send(err);
    } else {
        res.json(category);
    }

  });

};

exports.findOne = function(req, res, next) {
  Category.findById(req.params.category_id).populate("posts").exec(function(err, category) {
    if (err) {
        res.send(err);
    } else {
        req.category = category;
        next();
    }

  });
};

exports.getCategoryById = function(req, res) {
  console.log(req.params);
  res.json(req.category);
  
};

exports.createPosts = function(req, res){

    var category = req.category;
    var posts = new PostModel(req.body);
    posts.user = req.params.user_id;
    posts.category = category.id;
  

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
};


exports.updateCategoryById = function(req, res){
	Category.findById(req.params.category_id, function(err, category){
		if(err){
			res.send(err);
		}
		else{
			category.categoryName = req.body.categoryName;
			category.save(function(err){
				if(err){
					res.send(err);
				}

				else {
					res.json({
						message: "It has been updated"
					});
				}

			});
		}

	});

};



exports.deleteCategoryById = function(req, res){
	Category.remove({
		_id: req.params.category_id
	},function(err){
		if(err){
			res.send(err);
		}

		else{
			res.json({
				message: "It has been deleted"
			});
		}
	});

};
