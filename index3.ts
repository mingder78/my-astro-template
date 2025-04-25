
import Redis from "ioredis";
const redis = new Redis();
redis.command().then(commands => {
  console.log(commands.map(cmd => cmd[0])); // Array of command names
});
