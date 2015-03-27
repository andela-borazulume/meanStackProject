var commentModel = require('../models/commentsModel');
var PostModel = require('../models/postModel');


exports.createComment = function(req, res) {
  var post = req.posts;
  var posts = new PostModel(req.body);
  posts.category = req.params.post_id;
  
  posts.save(function(err) {
    if(err) {
      res.send(err, posts);
    }   
    else {
      res.json(posts);
    }
  });
};

exports.getComment = function(req, res) {
  PostModel.find(function(err, posts) {
    if(err) {
      res.status(500).send(err);
    }
    else {
      res.json(posts);
    }
  });
};

xports.createPosts = function(req, res) {
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
