var cfg = require("envigor")();
var app = require('./lib/app.js')(cfg);
var server = require('http').createServer(app);

server.listen(cfg.port || 3000);

setInterval(require('./lib/interval.js')(cfg),1000);
