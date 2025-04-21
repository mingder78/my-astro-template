import RedisClient from './RedisClient.ts'

async function example() {
  const redis = new RedisClient();
  
  try {
    await redis.connect();
    await redis.set('myKey', 'Hello, Redis!');
    const value = await redis.get('myKey');
    await redis.disconnect();
  } catch (err) {
    console.error('Error in Redis operations:', err);
  }
}

example();
