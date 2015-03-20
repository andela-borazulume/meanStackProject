var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: "Please put in a category"
    },
    created: {
    	type: Date,
    	default: Date.now
    }
});

module.exports = mongoose.model('Category', categorySchema, 'category');
