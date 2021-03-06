var user            = require("../controllers/userController"),
    postController  = require("../controllers/postController"),
    PostModel       = require("../models/postModel"),
    commentModel    = require("../models/commentsModel"),
    mongoose        = require("mongoose");

module.exports = function(app) {
    var express = require("express");
    var router = express.Router();

    app.use('/api', router);

    router.use(function(req, res, next) {
        console.log("Hit me");
        next();

    });

    router.route('/posts').get(postController.getPosts);

    router.route('/posts/:post_id')
        .get(postController.getPostById)
        .put(user.requiresLogin, postController.updatePost)
        .delete(user.requiresLogin, postController.deletePost);

    router.route('/posts/:post_id/comments')
        .post( postController.postComments);
        // .get(postController.getComments);

};
