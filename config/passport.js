var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use('local', new LocalStrategy(
  function(username, password, done) {
    
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.authentication(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = function () {
  passport.serializeUser(function(user, done) {
        done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('id: ', id);
    User.findById(id, function(err, user) {
        done(err, user);
    });
  });

};

