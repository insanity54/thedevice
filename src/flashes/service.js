var Service = require('backbone.service');
var Collection = require('./collection');
var CollectionView = require('./collection-view');

var FlashesService = Service.extend({
  setup(options = {}) {
    this.container = options.container;
  },

  start() {
    this.collection = new Collection();
    this.view = new CollectionView({
      collection: this.collection
    });
    this.container.show(this.view);
  },

  requests: {
    add: 'add',
    remove: 'remove',
  },

  add(flash) {
    this.collection.add(flash);
  },

  remove(flash) {
    var model = this.collection.findWhere(flash);
    if (model) {
      model.destroy();
    }
  }
});

module.exports = new FlashesService();