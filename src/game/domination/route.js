var View = require('./view');
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  initialize: function(options) {
    this.container = options.container;
    this.render();
  },
  render: function() {
    this.view = new View();
    this.container.show(this.view);
  }
});