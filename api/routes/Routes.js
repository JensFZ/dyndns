'use strict';
module.exports = function(app) {
  var dyndns = require('../controllers/Controller');

  // todoList Routes
  app.route('/domain')
//    .get(todoList.list_all_tasks)
    .post(dyndns.create_domain);

  app.route('/domain/:domainname')
//    .get(dyndns.read_a_task)
    .put(dyndns.update_domain)
    .delete(dyndns.delete_domain);
};
