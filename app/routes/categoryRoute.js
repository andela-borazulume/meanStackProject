var Category = require('../models/categoryModel');
var categoryController = require('../controllers/categoryController');
var mongoose = require('mongoose');

module.exports = function(app){
	var express = require('express');
	var router = express.Router();

	app.use('/api', router);

	router.use(function(req, res, next){
		console.log("Hi there, I am running");
		next();

	});

	router.route('/category').
	post(categoryController.postCategory).
	get(categoryController.getCategory);

	router.route('/category/:category_id').
	get(categoryController.getCategoryById).
	put(categoryController.updateCategoryById).
	delete(categoryController.deleteCategoryById);

};