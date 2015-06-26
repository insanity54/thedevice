var ModalService = require('backbone-service-modals');

var LayoutView = require('./layout-view');
var AlertView = require('./alert/view');
var ConfirmView = require('./confirm/view');
var PromptView = require('./prompt/view');


var WiresModalService = ModalService.extend({
  AlertView   : AlertView,
  ConfirmView : ConfirmView,
  PromptView  : PromptView,

  setup(options = {}) {
    this.container = options.container;
  },

  start() {
    this.layout = new LayoutView();
    this.container.show(this.layout);
  },

  render(view) {
    this.layout.content.show(view);
  },

  remove() {
    this.layout.content.reset();
  },

  animateIn() {
    return this.layout.animateIn();
  },

  animateOut() {
    return this.layout.animateOut();
  }
});

module.exports = new WiresModalService();