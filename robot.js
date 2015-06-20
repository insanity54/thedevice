var Cylon = require('cylon');

Cylon.robot({
    name: "TestBot",

    connections: {
	raspi: { adaptor: 'raspi' }
    },

    devices: {
	led: { driver: 'led', pin: 7 }
    },

    work: function(my) {
	var direction = 'up';
	
	
	setInterval(function() {

	    my.led.currentBrightness(function(err, val) {
		if (err) throw err;
		if (val == 256) {
		    direction = 'down';
		}
		else if (val == 0) {
		    direction = 'up';
		}

		
		if (direction == 'up') {
		    my.led.brightness(val += 16);
		}
		else {
		    my.led.brightness(val -= 16);
		}
	    });
	    
	}, 0);
    }


}).start();
