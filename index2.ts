import Redis, { Result, Callback } from "ioredis";
const redis = new Redis();
await redis.set('key1','value1')
const ok = await redis.get('key1')
console.log(ok)

/**
 * Define our command
 */
redis.defineCommand("myecho", {
  numberOfKeys: 1,
  lua: "return KEYS[1] .. ARGV[1]",
});

// Add declarations
declare module "ioredis" {
  interface RedisCommander<Context> {
    myecho(
      key: string,
      argv: string,
      callback?: Callback<string>
    ): Result<string, Context>;
  }
}

// Works with callbacks
redis.myecho("key", "argv", (err, result) => {
  console.log("callback", result);
});

// Works with Promises
(async () => {
  console.log("promise", await redis.myecho("key1", "2argv"));
})();

// Works with pipelining
redis
  .pipeline()
  .myecho("key", "3argv")
  .exec((err, result) => {
    console.log("pipeline", result);
  });
