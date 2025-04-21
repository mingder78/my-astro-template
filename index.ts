import { createClient } from 'redis';

const redis_url = import.meta.env.REDIS_URL;
// const url = `redis://${import.meta.env.REDIS_USERNAME}:${import.meta.env.REDIS_PASSWORD}@${import.meta.env.REDIS_HOST}:${import.meta.env.REDIS_PORT}`

const redisConfig = {
  url: redis_url
};

async function connectToRedis() {
  try {
    const client = createClient(redisConfig);

    client.on('error', (err) => console.error('Redis Client Error:', err));

    await client.connect();
    console.log('Connected to Redis!');

    await client.set('myKey', 'Hello, Redis!');
    console.log('Set key "myKey"');

    const value = await client.get('myKey');
    console.log('Value of myKey:', value);

    await client.quit();
    console.log('Disconnected from Redis');
  } catch (err) {
    console.error('Error:', err);
  }
}

connectToRedis();
