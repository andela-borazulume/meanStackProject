'use Strict';

var mongoose      = require('mongoose'),
     User          = require('../models/userModel'),
     PostModel     = require('../models/postModel'),
     passport      = require('passport'),
     LocalStrategy = require('passport-local').Strategy,
     session       = require('express-session');

exports.createUser = function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
        message: 'Please fill out all fields'
    });
  }
  User.findOne({ 'username' :  req.body.username }, function(err, user) {
      // if there are any errors, return the error
    if (err){
        return done(err);
      }
    // check to see if theres already a user with that email
    if (user) {
        res.send({signupMessage: "Username already exists"});
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
    passport.authenticate('local-login', function(err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            req.login(user, function(err) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.jsonp(user);
                }
            });
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

exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, {
            message: 'User is not logged in'
        });
    }

    next();
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

exports.getPosts = function(req, res){
    PostModel.where('user').equals(req.params.user_id).where('category')
    .equals(req.params.category_id).exec(function(err, posts){
        if(err){
            res.send(err);
        }
        else{
            res.json(posts);
        }
    });

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
