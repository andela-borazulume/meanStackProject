var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  categoryName: {
    type: String,
    required: "Please put in a category"
  },
  created: {
  	type: Date,
  	default: Date.now
  },

  posts: [{
  	type: Schema.ObjectId,
  	ref: "PostModel"
  }]

});

module.exports = mongoose.model('Category', categorySchema, 'category');
