var PostModel = require('../models/postModel');
var Category = require('../models/categoryModel');
var commentModel = require("../models/commentsModel");


exports.createPosts = function(req, res) {
  var category = req.category;
  var posts = new PostModel(req.body);
  posts.user = req.params.user_id;
  posts.category = req.params.category_id;
  
  posts.save(function(err) {
    if(err) {
      res.send(err, posts);
    }   
    else {
      res.json(posts);
    }
  });
};

exports.getPosts = function(req, res) {
  PostModel.find(function(err, posts) {
    if(err) {
      res.status(500).send(err);
    }
    else {
      res.json(posts);
    }
  });
};

exports.getPostById = function(req, res) {
  PostModel.findById(req.params.post_id).populate('comments').exec(function(err, posts) {
    if(err) {
      res.send();
    }
    else {
      res.json(posts);
    }
  });
};

exports.postComments= function(req, res) {
      var comment = new commentModel(req.body);
      // PostModel.comments.push(comment);
      comment.save(function(err, commentsByPost) {
          if (err) {
              res.send(err);

          } else {

              PostModel.findById(req.params.post_id, function(err, post) {
                // console.log(req.params.post_id);
                  if (err) {
                      res.send(err);

                  } else {
                      // console.log(post);
                      post.comments.push(commentsByPost);
                      post.save(function(err, post) {
                          if (err) {
                              res.send(err);

                          } else {
                              // console.log(post);
                              res.json(post);
                          }

                      });

                  }


              });
              // res.json(commentsByPost);
          }

        });

    };

// exports.getComments = function(req, res){
//       PostModel.findById(req.params.post_id, function(err, comments){
//         if(err){
//           res.send(err);
//         }
//         else {
//           res.json(comments);
//         }

//       });
// };

exports.updatePost = function(req, res) {
  PostModel.findById(req.params.post_id, function(err, posts) {
    var post = new PostModel(req.body);
    if(err){
      res.send(err);
    }
    else {
      post.save(function(err, posts){
        if(err) {
          res.send(err);
        }
        else {
          res.json(posts);
        }
      });
    }
  });
};

exports.deletePost = function(req, res) {
  PostModel.remove({
    _id: req.params.post_id
    }, function(err, post) {
    if (err) {
      res.send(err);
    } 
    else {
      res.json({
          message: "It has been deleted"
      });
    }
  });
};
