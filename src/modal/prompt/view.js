var ItemView = require('backbone.marionette').ItemView;

var Model = require('backbone');
var template = require('./template.hbs');

module.exports = ItemView.extend({
  template: template,

  initialize(options = {}) {
    this.model = new Model(options);
  },

  triggers: {
    'click .btn-primary' : 'confirm',
    'click .close'       : 'cancel'
  }
});