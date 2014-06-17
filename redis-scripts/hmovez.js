module.exports = function() {
  return ["local c=redis.call",
    "c('zadd',KEYS[2],c('hget',KEYS[1],ARGV[1]),ARGV[1])",
    "c('hdel',KEYS[1],ARGV[1])",
    "return {ok='OK'}"
  ].join('\n');
};
