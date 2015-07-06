require('./plugins');
var Backbone = require('backbone');
var $ = require('jquery');
//Backbone.$ = jquery;
var Application = require('./application/application');

var app = new Application();

var ModalService = require('./modal/service');
var GameRouter = require('./game/router');
//var FlashesService = require('./flashes/service');
//var HeaderService = require('./')






ModalService.setup({
  container: app.layout.overlay
});

console.log('main:: creating game router with container', app.layout.content)
app.game = new GameRouter({
  container: app.layout.content
});

// HeaderService.setup({
//   container: app.layout.header
// });

// FlashesService.setup({
//   container: app.layout.flashes
// });

// $(document).ajaxError(() => {
//   FlashesService.add({
//     type: 'danger',
//     title: 'Server Error'
//   });
// });

// app.index = new IndexRouter({
//   container: app.layout.content
// });

// app.colors = new ColorsRouter({
//   container: app.layout.content
// });

// app.books = new BooksRouter({
//   container: app.layout.content
// });

Backbone.history.start();


