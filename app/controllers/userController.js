'use Strict';

var mongoose = require('mongoose');
var User = require('../models/userModel');

exports.createUser = function(req, res) {
  var personal = new User(req.body);
  personal.save(function(err) {
    if (err) {
        res.send(err);
    } else {
      res.json({
          message: "It has been created"
      });
    }

  });
};

exports.allusers = function(req, res) {
  User.find(function(err, user) {
    if (err) {
        res.send(err);
    } else {
        res.json(user);
    }
  });

};

exports.findOne = function(req, res, next){
  User.findById(req.params.user_id).populate("posts").exec( function(err, user) {
    if(err){
      res.send(err);
    }
    else{
      req.user = user;
      next();
    }
  }); 
};

exports.getUserById = function(req, res) {
  
  res.json(req.user);

};

exports.updateUser = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    var personal = new User(req.body);

    if (err) {
        res.send(err);

    } else {
      
      data.save(function(err) {
        if (err) {
            res.send(err);

        } else {
            res.json({
                message: "It has been updated"
            });
        }

      });
    }
  });
};

exports.deleteUser = function(req, res) {
  User.remove({
  _id: req.params.user_id
  }, function(err, user) {
    if (err) {
      res.send(err);

    } else {
      res.json({
          message: "It has been deleted"
      });
    }

  });
};