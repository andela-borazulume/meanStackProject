var user                = require("../controllers/userController"),
    Category            = require('../models/categoryModel'),
    categoryController  = require('../controllers/categoryController'),
    postcontroller      = require('../controllers/postController');

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
    put(user.requiresLogin, categoryController.updateCategoryById).
    delete(user.requiresLogin, categoryController.deleteCategoryById);

    router.route('/categories/:category_id/posts').
    post(user.requiresLogin, postcontroller.createPosts).
    get(categoryController.getPostByCategory);
   
    router.param("category_id", categoryController.findOne);


};
