var Backbone = require('backbone');
var DominationRoute = require('./domination/route');
// var BombRoute = require('./bomb/route');
var IntelRoute = require('./intel/route');

console.log('game router loaded');

module.exports = Backbone.Router.extend({
  
  initialize: function(options) {
    console.log('game router being intitialized with options: ', options);
    this.container = options.container;
  },
  
  routes: {
    "game":       "default",       // go to the default
    "game/domination": "domination",
    "game/intel": "intel"
    //"game/bomb": "bomb"
  },
  
  default: function() {
    console.log('default game');
    this.navigate("game/domination", {trigger: true, replace: true});
    return new DominationRoute({
      container: this.container
    });
  },
  
  game: function() {
    // the default game route
    console.log('router game');
    return new DominationRoute({
      container: this.container
    });
  },
  
  domination: function() {
    console.log('domination route called with container', this.container);
    return new DominationRoute({
      container: this.container
    });
  },
  
  intel: function() {
    return new IntelRoute({
      container: this.container
    });
  }
  
  // bomb: function() {
  //   return new BombRoute({
  //     container: this.container
  //   });
  // }

});