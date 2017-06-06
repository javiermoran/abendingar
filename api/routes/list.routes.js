'use strict'
module.exports = function(app) {
  var ListController = require('../controllers/list.controller')

  app.route('/advices')
    .get(ListController.getAll)

  app.route('/advices/rand')
    .get(ListController.random)

  app.route('/advices/:id')
    .get(ListController.getById)

}