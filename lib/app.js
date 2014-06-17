var express = require('express');
var redis = require('redis');

module.exports = function appctor(cfg) {
  var app = express();

  var db = redis.createClient(cfg.redis.port, cfg.redis.hostname,
      {no_ready_check: true});
  if (cfg.redis.password) db.auth(cfg.redis.password);
}
