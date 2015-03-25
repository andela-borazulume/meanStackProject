var postController = require("../controllers/postController");
var PostModel = require("../models/postModel");
var commentModel = require("../models/commentsModel");
var mongoose = require("mongoose");

module.exports = function(app) {
    var express = require("express");
    var router = express.Router();

    app.use('/api', router);

    router.use(function(req, res, next) {
        console.log("Hit me");
        next();

    });

    router.route('/posts').
    get(postController.getPosts);

    router.route('/posts/:post_id').
    get(postController.getPostById).
    put(postController.updatePost).
    delete(postController.deletePost);

    router.route('/posts/:post_id/comments').
    post(function(req, res) {
      var comment = new commentModel(req.body);
      // PostModel.comments.push(comment);
      comment.save(function(err, comments) {
          if (err) {
              res.send(err);

          } else {
              res.json(comments);
              PostModel.findById(req.params.post_id, function(err, post) {
                console.log(req.params.post_id);
                  if (err) {
                      res.send(err);

                  } else {
                      post.comments.push(comments);
                      post.save(function(err, post) {
                          if (err) {
                              res.send(err);

                          } else {
                              res.json(post);
                          }

                      });

                  }


              });
          }

        });

    });

};
