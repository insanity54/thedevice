var Backbone = require('backbone');
var DominationRoute = require('./domination/route');
// var BombRoute = require('./bomb/route');
// var IntelRoute = require('./intel/route');


module.exports = Backbone.Router.extend({

  routes: {
    "game":       "game",       // go to the default
    "game/domination": "domination"
    //"game/intel": "intel",
    //"game/bomb": "bomb"
  },

  
  game: function() {
    // the default game route
    return new DominationRoute({
      container: this.container
    });
  },
  
  domination: function() {
    return new DominationRoute({
      container: this.container
    });
  }
  
  // intel: function() {
  //   return new IntelRoute({
  //     container: this.container
  //   });
  // },
  
  // bomb: function() {
  //   return new BombRoute({
  //     container: this.container
  //   });
  // }

});