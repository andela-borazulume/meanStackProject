var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personalSchema = new Schema({
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
        match: [/.+\@.+\..+/, 'Please fill in a valid email address']
    },
    gender: {
        type: String,
        trim: true,
        default: '',
    },
    phoneNumber: {
        type: String,
        trim: true,
        default: '',
    },

    password: {
        type: String,
        default: '',
        required: "Please fill in your password"
    },
    userName: {
        type: String,
        trim: true,
        unique: true,
        required: "Please fill in your username"
    },
    dateOfBirth: {
        type: String,
        trim: true,
        default: ''
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', personalSchema,'details');
