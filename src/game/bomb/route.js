var View = require('./view');
var Backbone = require('backbone');


module.exports = Backbone.Route.extend({
  render: function() {
    this.view = new View();
    this.container.show(this.view);
  }
});