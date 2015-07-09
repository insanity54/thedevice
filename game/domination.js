var includes = require('includes');
var storage = require('./storage');



module.exports = {
    start: function start(gameType) {
        // start up a game
        // sets timers n shit
        
        // gametypes:
        //   - dominaiton
        //   - bomb
        //   - intel
        
        // DOMINATION
        //
        //   client side START:
        //     admin enters time to win (15 minutes)
        //     admin presses start
        //     client sends ?ttw=900 thru backbone/socket.io
        //
        //   server side START:
        //     server gets socket.io request with ?ttw=900
        //     server starts two timers, one per team
        //     using socketio, sync timers with client display
        //     audio played on device, "game start"
        
        // if starting domination...
        //   the client needs...
        //     
        //   - start timer
        //   - 
    },
    
    
    pause: {

        //   client side PAUSE:
        //     admin presses pause button
        //     client sends ?state=pause thru backbone/socket.io
        //
        //   server side PAUSE:
        //     server gets socket.io request with ?state=pause
        //     
    },
    
    stop: {
        
    }
    
}