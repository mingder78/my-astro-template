// Import the Redis client
import { createClient } from 'redis';

// Define Redis connection details from Redis Labs
const redisConfig = {
  url: `redis://${import.meta.env.REDIS_USERNAME}:${import.meta.env.REDIS_PASSWORD}@${import.meta.env.REDIS_HOST}:${import.meta.env.REDIS_PORT}`,
};

// Function to connect to Redis and perform basic operations
async function connectToRedis() {
  try {
    // Create a Redis client
    const client = createClient(redisConfig);

    // Handle connection errors
    client.on('error', (err) => console.error('Redis Client Error:', err));

    // Connect to Redis
    await client.connect();
    console.log('Connected to Redis!');

    // Example: Set a key-value pair
    await client.set('myKey', 'Hello, Redis!');
    console.log('Set key "myKey"');

    // Example: Get the value of the key
    const value = await client.get('myKey');
    console.log('Value of myKey:', value);

    // Disconnect from Redis
    await client.quit();
    console.log('Disconnected from Redis');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Run the function
connectToRedis();
