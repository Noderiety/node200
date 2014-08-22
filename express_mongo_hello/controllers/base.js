/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/
var $ = require('stepup')
var ObjectId = require('mongoose').Types.ObjectId
var Thread = require('../models/thread');
var Post = require('../models/post');

function thread(req, res) {
  $([
    function ($) {
      new Thread({title: req.body.title, author: req.body.author}).save($.none())
    }, function($) {
      res.end('Okay')
    }
  ])
}


function post(req, res) {
  $([
    function ($) {
      var obid = ObjectId(req.body.thread)
      new Post({thread: obid, post: req.body.post}).save($.none())
    }, function($) {
      res.end('Okay')
    }
  ])
}

function list(req, res) {
  Thread.find(function(err, threads) {
    res.send(threads);
  });
}

// first locates a thread by title, then locates the replies by thread ID.
function show(req, res) {
    Thread.findOne({title: req.params.title}, function(error, thread) {
        var posts = Post.find({thread: thread._id}, function(error, posts) {
          res.send([{thread: thread, posts: posts}]);
        });
    })
}

module.exports = {
  post: post
, list: list
, show: show
, thread: thread
}