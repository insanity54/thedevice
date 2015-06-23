var DeviceControl = Backbone.Marionette.Application.extend();

var Game = Backbone.Model.extend();

var GameView = Backbone.Marionette.LayoutView.extend({
  template: "#game-view",
  regions: {
    panel: "#panel",
    content: '#content'
  }
});


/**
 * VIEWS
 */
var DominationView = Backbone.Marionette.LayoutView.extend({
    template: '#game-view',
    events: {
        'click button#play': 'playGame'
    },
    ui: {
        timeElapsed: '#timeElapsed'
    },
    playGame: function() {
        //this.
        console.log('play game func called');
    }
    
});
// var BombView = Backbone.Marionette.LayoutView.extend({
//     template: 
// })

var PanelView = Backbone.Marionette.LayoutView.extend({
  template: "#panel-view",

  ui: {
    brand: "#brand",
    connection: "#connection"
  }
});

var AppLayoutView = Marionette.LayoutView.extend({
  template: "#layout-view-template",

  regions: {
    menu: "#menu",
    content: "#content"
  }
});



var deviceControl = new DeviceControl();

deviceControl.addInitializer(function() {
    
    console.log('app initializing');

    // create the game view which has #panel and #content
    // create the domination view which has the dual timers, game data, and play/pause/stop buttons
    var gameView = new GameView();
    //var dominationView = new DominationView();


    gameView.getRegion('panel').show(new PanelView());
    gameView.getRegion('content').show(new DominationView());
    gameView.render();
    
    
    
    // DeviceControl.game = new Game();
    
    // DeviceControl.top.show(new DominationView());
});

//console.log('heyo');


deviceControl.start();