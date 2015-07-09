var redis = require('redis');

var client = redis.createClient();


module.exports = {
    put: function put(key, value) {
        redis.SET(key, value);
    },
    
    pull: function pull(key, cb) {
        redis.GET(key, function(e, v) {
            if (e) return cb(new Error('OH SHIT the database got nothing back'), null);
            return cb(e, v);
        });
    }
};