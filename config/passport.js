var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var session = require('express-session');

  module.exports = function (passport) {
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
    });
  };

  passport.use('local-login', new LocalStrategy(
    function(username, password, done) {
      
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username & password' });
        }
        if (!user.authentication(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.use('local-signup', new LocalStrategy(
    function(req, email, password, done) {

      User.findOne({ 'username' :  req.body.username }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

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
                  console.log(user);
                  res.jsonp(user);
              }

          });
        }
    });
  }));

// };

