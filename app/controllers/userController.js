'use Strict';

var mongoose = require('mongoose');
var User = require('../models/userModel');
var PostModel = require('../models/postModel');
var passport = require('passport');

exports.createUser = function(req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    User.findOne({ 'username' :  req.body.username }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                res.send({signupMessage: "Error Error Error"});
            }
            else {
          var personal = new User(req.body);

          personal.save(function(err, user) {
              if (err) {
                  res.send(err);
              } else {
                  res.jsonp(user);
              }

          });
        }
    });
  };

exports.login = function(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }

    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            return res.jsonp(user);
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
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


exports.logout = function(req, res) {
    req.logout();
    res.json("User logged out successfully");
};


exports.findOne = function(req, res, next) {
    User.findById(req.params.user_id).populate("category").exec(function(err, user) {
        if (err) {
            res.send(err);
        } else {
            req.user = user;
            next();
        }
    });
};

exports.getUserById = function(req, res) {
    res.json(req.user);


};

exports.getPosts = function(req, res) {

    res.json(req.user.posts);

};

exports.getPostsByUser = function(req, res){
    PostModel.where('user').equals(req.params.user_id).exec(function(err, posts){
        if(err){
            res.send(err);
        }

        else {
            res.json(posts);
        }
    });

};

exports.updateUser = function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        var personal = new User(req.body);

        if (err) {
            res.send(err);

        } else {

            personal.save(function(err) {
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
