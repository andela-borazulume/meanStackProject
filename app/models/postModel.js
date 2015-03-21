var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
	content: {
		type: String,
		default: "",
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	category:{
		type: Schema.Types.ObjectId,
		ref: "Category"
	}
});

module.exports = mongoose.model("PostModel", postSchema, "posts");