module.exports = function() {
  return ["local c=redis.call",
    "c('zadd',KEYS[1],ARGV[1],ARGV[2])",
    "c('hdel',KEYS[2],ARGV[2])",
    "return {ok='OK'}"
  ].join('\n');
};
