var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personalSchema = new Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    gender: String,
    phoneNumber: String,
    password: String,
    userName: String,
    dateOfBirth: String,
    dateRegistered: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Details', personalSchema);
