
var user = require('../controllers/userController');
var controller = require('../controllers/categoryController');

module.exports = function(app) {
  var express = require('express');

  var router = express.Router();

  app.use('/api', router);

  router.use(function(req, res, next) {
  console.log("Waiting for something to happen");
  next();

  });

  router.route('/users'). /* to create and find all users */
  post(user.createUser).
  get(user.allusers);

  router.route('/login').
  post(user.login);

  router.route('/logout').
  get(user.logout);

  router.route('/users/:user_id'). /* to find, update and delete a particular user */
  get(user.getUserById).
  put(user.updateUser).
  delete(user.deleteUser);

  router.route('/users/:user_id/categories/:category_id/posts').
  get(user.getPosts).
  post(controller.createPosts);

  // router.route('/users/:user_id/categories/:category_id/posts').
  // post(controller.createPosts);

  router.param("user_id", user.findOne); 
};
