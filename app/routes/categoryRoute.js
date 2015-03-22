var Category = require('../models/categoryModel');
var categoryController = require('../controllers/categoryController');
var mongoose = require('mongoose');

module.exports = function(app) {
    var express = require('express');
    var router = express.Router();

    app.use('/api', router);

    router.use(function(req, res, next) {
        console.log("Hi there, I am running");
        next();

    });

    router.route('/categories'). /* to create and find category */
    post(categoryController.createCategory).
    get(categoryController.allCategories);

    router.route('/categories/:category_id'). /* to find, update and delete a particular category */
    get(categoryController.getCategoryById).
    put(categoryController.updateCategoryById).
    delete(categoryController.deleteCategoryById);

    router.route('/categories/:category_id/posts').
    post(categoryController.createPosts);
   
    router.param("category_id", categoryController.findOne);


};
