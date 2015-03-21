var User = require('../models/userModel');
var user = require('../controllers/userController');


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

  router.route('/users/:user_id'). /* to find, update and delete a particular user */
  get(user.getUserById).
  put(user.updateUser).
  delete(user.deleteUser);

  router.param('user_Id', user.findOne);
};
