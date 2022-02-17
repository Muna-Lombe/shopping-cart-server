'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')
// set the routes from the views
const cart = require('./views/cart')
const productView = require('./views/show')
const products = require('./views/index')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
}
