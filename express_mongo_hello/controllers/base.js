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
  let threadId = ObjectId(req.param('thread'))
  let postValue = req.query.post
  console.log(threadId, postValue)
  q.ninvoke(new Post({thread: threadId, post: postValue}), 'save')
    .then(() => res.end('Okay'))
}

function list(req, res) {
  Thread.find().exec()
    .then((threads) => res.send(threads))
    .done()
}

// first locates a thread by title, then locates the replies by thread ID.
function show(req, res) {
  let title = req.param('title')
  q.ninvoke(Thread, 'findOne', {title: title})
    .then((thread) => {
      q.ninvoke(Post, 'find', {thread: thread._id})
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