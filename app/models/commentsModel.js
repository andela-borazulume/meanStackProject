var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var commentSchema = new Schema({
	comments: {
		type: String,
		default: "",
		trim: true

	},

	dateCreated: {
		type: Date,
		default: Date.now
	},

	posts:{
		type: Schema.Types.ObjectId,
		ref: 'PostModel'
	}
});

module.exports = mongoose.model('CommentModel', commentSchema, 'comments');