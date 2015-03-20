var Category = require('../models/categoryModel');

exports.postCategory = function(req, res){
		var category = new Category();
		category.name = req.body.name;
		category.created = req.body.created;
		category.user = req.body.user;

		category.save(function(err){
			if(err){
				res.send(err);

			}
			else{
				console.log(req.body.name);
				res.json({
				message: 'I have posted this'
				});
			}

		});	
	};

	exports.getCategory = function(req, res){
		Category.find(function(err, category){
			if(err){
				res.send(err);
			}
			else{
				res.json(category);
			}

		});

	};

	exports.getCategoryById = function(req, res){
		Category.findById(req.params.category_id, function(err, category){
			if(err){
				res.send(err);
			}
			else{
				res.json(category);
			}


		});

	};

	exports.updateCategoryById = function(req, res){
		Category.findById(req.params.category_id, function(err, category){
			if(err){
				res.send(err);
			}
			else{
				category.name = req.body.name;
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

