/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/
let q = require('q')
  , ObjectId = require('mongoose').Types.ObjectId
  , Thread = require('../models/thread')
  , Post = require('../models/post')

function thread(req, res) {
  q.invoke(new Thread({title: req.param('title'), author: req.param('author')}), 'save')
    .then(() => res.end('Okay'))
    .done()
}


function post(req, res) {
  let obid = ObjectId(req.param('thread'))
  q.ninvoke(new Post({thread: obid, post: req.param('post')}), 'save')
    .then(() => res.end('Okay'))
}

function list(req, res) {
  Thread.find().exec()
    .then((threads) => res.send(threads))
    .done()
}

// first locates a thread by title, then locates the replies by thread ID.
function show(req, res) {
  Thread.findOne({title: req.param('title')}).exec()
    .then((thread) => {
      Post.find({thread: thread._id}).exec()
        .then((posts) => res.send([{thread: thread, posts: posts}]))
    })
    .done()
}

module.exports = {
  post: post
, list: list
, show: show
, thread: thread
}