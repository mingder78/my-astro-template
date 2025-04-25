## test ioredis lib

### test client

```sh
ming-ders-MacBook.local💩➜  my-astro-template git:(main) ✗ bun run --watch index2.ts
value1
callback keyargv
promise key12argv
pipeline [
  [ null, "key3argv" ]
]


```

```sh
ming-ders-MacBook.local💩➜  my-astro-template git:(main) ✗ bun run --watch index3.ts
[
  "zdiffstore", "spop", "hrandfield", "rpushx", "readonly", "blmpop", "ltrim", "slowlog", "rpoplpush",
  "fcall", "lolwut", "config", "smismember", "sdiffstore", "hvals", "hmget", "getdel", "memory", "role",
  "readwrite", "pfdebug", "zscan", "zdiff", "info", "touch", "mset", "zlexcount", "punsubscribe", "setnx",
  "ttl", "zscore", "getrange", "lrem", "monitor", "exec", "xgroup", "asking", "keys", "zadd", "rpush", "type",
  "sunionstore", "setex", "get", "bzmpop", "acl", "setrange", "waitaof", "decr", "subscribe", "rpop",
  "xclaim", "ping", "evalsha", "getex", "command", "xrevrange", "blmove", "zunionstore", "substr", "zrevrange",
  "scard", "replicaof", "brpop", "xpending", "watch", "lrange", "hdel", "geohash", "shutdown", "xack",
  "zrangestore", "srandmember", "smove", "smembers", "mget", "evalsha_ro", "replconf", "dump", "xadd",
  "module", "hstrlen", "persist", "psync", "zrangebyscore", "sadd", "move", "pubsub", "restore-asking",
  "randomkey", "georadiusbymember", "pfadd", "renamenx", "zremrangebylex", "discard", "append",
  "zrandmember", "zcard", "lcs", "blpop", "set", "object", "zunion", "geosearchstore", "cluster", "xreadgroup",
  "xdel", "bgrewriteaof", "zincrby", "zremrangebyscore", "auth", "dbsize", "quit", "reset", "pexpire",
  "slaveof", "getset", "hlen", "pfmerge", "sismember", "sync", "geodist", "restore", "unsubscribe",
  "zpopmin", "flushdb", "zrange", "sort_ro", "hello", "zmpop", "geosearch", "xtrim", "expire", "pfcount",
  "failover", "zrem", "zpopmax", "client", "xinfo", "function", "psetex", "unwatch", "del", "bitfield",
  "setbit", "hget", "georadiusbymember_ro", "pexpireat", "publish", "xsetid", "decrby", "bitop", "zrangebylex",
  "srem", "migrate", "zrevrangebylex", "xread", "pexpiretime", "msetnx", "hset", "spublish", "bgsave",
  "swapdb", "geopos", "lpos", "zrevrank", "xrange", "wait", "expireat", "multi", "zinterstore", "psubscribe",
  "incrbyfloat", "lpush", "bitcount", "save", "echo", "sdiff", "pfselftest", "lastsave", "exists", "sscan",
  "select", "sintercard", "getbit", "rename", "ssubscribe", "eval", "lpop", "zintercard", "unlink",
  "sinter", "zrevrangebyscore", "script", "xlen", "sunsubscribe", "copy", "incr", "georadius", "geoadd",
  "hscan", "lmove", "lset", "debug", "hincrby", "zinter", "hsetnx", "hexists", "sort", "bitfield_ro",
  "hgetall", "zremrangebyrank", "bzpopmin", "lindex", "fcall_ro", "incrby", "bitpos", "zmscore", "linsert",
  "expiretime", "hkeys", "flushall", "xautoclaim", "strlen", "hmset", "scan", "latency", "time", "lpushx",
  "brpoplpush", "georadius_ro", "sinterstore", "lmpop", "hincrbyfloat", "zcount", "llen", "eval_ro",
  "pttl", "bzpopmax", "sunion", "zrank"
]

```

### start your local redis server first

```sh
ming-ders-MacBook.local💩➜  x git:(main) redis-server /usr/local/etc/redis.conf
41626:C 25 Apr 2025 11:21:22.722 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
41626:C 25 Apr 2025 11:21:22.722 * Redis version=7.2.7, bits=64, commit=00000000, modified=0, pid=41626, just started
41626:C 25 Apr 2025 11:21:22.722 * Configuration loaded
41626:M 25 Apr 2025 11:21:22.724 * Increased maximum number of open files to 10032 (it was originally set to 256).
41626:M 25 Apr 2025 11:21:22.724 * monotonic clock: POSIX clock_gettime
41626:M 25 Apr 2025 11:21:22.726 # Failed to write PID file: Permission denied
                _._
           _.-``__ ''-._
      _.-``    `.  `_.  ''-._           Redis 7.2.7 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 41626
  `-._    `-._  `-./  _.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |           https://redis.io
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'

41626:M 25 Apr 2025 11:21:22.726 # WARNING: The TCP backlog setting of 511 cannot be enforced because kern.ipc.somaxconn is set to the lower value of 128.
41626:M 25 Apr 2025 11:21:22.727 * Server initialized
41626:M 25 Apr 2025 11:21:22.729 * Loading RDB produced by version 7.2.7
41626:M 25 Apr 2025 11:21:22.729 * RDB age 264177 seconds
41626:M 25 Apr 2025 11:21:22.729 * RDB memory usage when created 1.30 Mb
41626:M 25 Apr 2025 11:21:22.729 * Done loading RDB, keys loaded: 3, keys expired: 0.
41626:M 25 Apr 2025 11:21:22.729 * DB loaded from disk: 0.002 seconds
41626:M 25 Apr 2025 11:21:22.729 * Ready to accept connections tcp

```


## Astro with Tailwind

```sh
bun create astro@latest -- --template with-tailwindcss
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).
