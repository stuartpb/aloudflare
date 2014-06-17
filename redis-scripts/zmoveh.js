module.exports = function() {
  return ["local c=redis.call",
    "local u=table.unpack",
    "local s={}",
    "for i=1,#ARGV do",
      "s[i*2-1]=ARGV[i]",
      "s[i*2]=c('zscore',KEYS[1],ARGV[i])",
    "end",
    "c('hmset',KEYS[2],u(s))",
    "c('zrem',KEYS[1],u(ARGV))",
    "return {ok='OK'}"
  ].join('\n');
};
