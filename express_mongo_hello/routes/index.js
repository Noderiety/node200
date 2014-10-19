var controllers = require('../controllers/')

module.exports = function(app) {
  app.post('/post', app.auth, controllers.base.post)
  app.get('/thread/:title', controllers.base.show)
  app.get('/thread', controllers.base.list)
  app.post('/thread', app.auth, controllers.base.thread)
}