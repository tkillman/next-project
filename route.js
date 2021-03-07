const routes = module.exports = require('next-routes')();

routes
  .add('index', '/')
  .add('posts', '/posts')
  .add('postDetail', '/posts/:postId');