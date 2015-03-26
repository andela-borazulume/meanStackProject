var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    posts: {
        type: String,
        default: "",
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    comments: [{
        comments: String,
        dateCreated: Date
    }]
});

module.exports = mongoose.model("PostModel", postSchema, "posts");
