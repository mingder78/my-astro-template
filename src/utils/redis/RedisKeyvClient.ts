import Keyv from 'keyv';
import KeyvRedis, { createClient } from '@keyv/redis';
import { type RedisClientOptions, type RedisClientType } from 'redis';

// Generic type T allows the class to work with any data type
class RedisKeyvClient<T = any> {
  private redisClient: RedisClientType | null;
  private keyv: Keyv<T>;
  private keyvRedis: KeyvRedis<T>;

  constructor(redisUrl: string = 'redis://localhost:6379') {
    // Initialize Redis client with configuration
    const config: RedisClientOptions = { url: redisUrl };
    this.redisClient = createClient(config);

    // Set up error handling for Redis client
    this.redisClient.on('error', (err: Error) => {
      console.error('Redis Client Error:', err);
    });

    // Initialize KeyvRedis and Keyv
    this.keyvRedis = new KeyvRedis<T>(this.redisClient);
    this.keyv = new Keyv<T>({ store: this.keyvRedis });
  }

  async connect(): Promise<void> {
    if (!this.redisClient) {
      throw new Error('Redis client is not initialized');
    }
    try {
      await this.redisClient.connect();
      console.log('Connected to Redis');
    } catch (err) {
      console.error('Redis Connection Error:', err);
      throw err;
    }
  }

  async set(key: string, value: T, ttl?: number): Promise<boolean> {
    try {
      await this.keyv.set(key, value, ttl);
      console.log(`Set key "${key}"`);
      return true;
    } catch (err) {
      console.error('Set Key Error:', err);
      throw err;
    }
  }

  async get<K = T>(key: string): Promise<K | undefined> {
    try {
      const value = await this.keyv.get<K>(key);
      console.log(`Retrieved value for key "${key}":`, value);
      return value;
    } catch (err) {
      console.error('Get Key Error:', err);
      throw err;
    }
  }

  async delete(key: string): Promise<boolean> {
    try {
      const result = await this.keyv.delete(key);
      console.log(`Deleted key "${key}":`, result);
      return result;
    } catch (err) {
      console.error('Delete Key Error:', err);
      throw err;
    }
  }

  async clear(): Promise<void> {
    try {
      await this.keyv.clear();
      console.log('Cleared all keys');
    } catch (err) {
      console.error('Clear Keys Error:', err);
      throw err;
    }
  }

  async disconnect(): Promise<void> {
    if (!this.redisClient?.isOpen) {
      return;
    }
    try {
      await this.redisClient.quit();
      console.log('Disconnected from Redis');
      this.redisClient = null;
    } catch (err) {
      console.error('Disconnect Error:', err);
      throw err;
    }
  }

  get isConnected(): boolean {
    return this.redisClient?.isOpen ?? false;
  }
}

export default RedisKeyvClient;