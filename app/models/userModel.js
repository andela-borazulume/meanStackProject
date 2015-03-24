var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Please fill in your first name"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Please fill in your last name"
    },
    middleName: {
        type: String,
        trim: true,
        default: '',
    },
    email: {
        type: String,
        trim: true,
        default: '',
        required: "Please fill in your email",
        match: [ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill in a valid email address']
    },
    gender: {
        type: String,
        trim: true,
        default: '',
    },
    phoneNumber: {
        type: Number,
        trim: true,
        default: '',
    },

    password: {
        type: String,
        default: '',
        required: "Please fill in your password"
    },

    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: "Please fill in your username"
    },
    salt: {
        type: String
    },
    provider: {
        type: String
    },
    dateOfBirth: {
        type: String,
        trim: true,
        default: ''
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }],

    posts: [{
        type: Schema.Types.Object,
        ref: "PostModel"

    }]

});

userSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

userSchema.methods.hashPassword = function(password){
    if (this.salt && password) {
        return crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    } else {
        return password;
    }
};

userSchema.methods.authentication = function(password) {
  return this.password === this.hashPassword(password);
};

userSchema.methods.generateJWT = function() {

  // set expiration to 60 days
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, 'SECRET');
};

module.exports = mongoose.model('User', userSchema,'details');
