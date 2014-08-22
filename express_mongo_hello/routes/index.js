var controllers = require('../controllers/')

module.exports = function(app) {
  app.post('/post', controllers.post)
  app.get('/thread/:title', controllers.show)
  app.get('/thread', controllers.list)
  app.post('/thread', controllers.thread)
}