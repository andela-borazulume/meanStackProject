var Category = require('../models/categoryModel');
var postController = require("../controllers/postController");


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

  res.json(req.category);
  
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

// exports.deleteCategoryById = function(req, res){
// 	Category.remove({
// 		_id: req.params.category_id
// 	},function(err){
// 		if(err){
// 			res.send(err);
// 		}

// 		else{
// 			res.json({
// 				message: "It has been deleted"
// 			});
// 		}
// 	});

// };
