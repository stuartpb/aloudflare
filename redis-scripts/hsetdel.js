module.exports = function() {
  return ["local c=redis.call",
    "c('hset',KEYS[1],ARGV[1],ARGV[2])",
    "c('hdel',KEYS[2],ARGV[1])",
    "return {ok='OK'}"
  ].join('\n');
};
