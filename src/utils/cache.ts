import { PERFORMANCE_TARGETS } from './performance';

const CACHE_PREFIX = 'balthazar-cache-';

interface CacheItem<T> {
  value: T;
  expiry: number;
}

export class CacheManager {
  static async get<T>(key: string): Promise<T | null> {
    if (typeof window === 'undefined') return null;
    
    const cacheKey = CACHE_PREFIX + key;
    const item = localStorage.getItem(cacheKey);
    
    if (!item) return null;
    
    try {
      const { value, expiry } = JSON.parse(item) as CacheItem<T>;
      if (expiry && expiry < Date.now()) {
        localStorage.removeItem(cacheKey);
        return null;
      }
      
      return value;
    } catch (error) {
      console.error('Failed to parse cached item:', error);
      localStorage.removeItem(cacheKey);
      return null;
    }
  }

  static set<T>(key: string, value: T, ttl = PERFORMANCE_TARGETS.CACHE_DURATION): void {
    if (typeof window === 'undefined') return;
    
    const cacheKey = CACHE_PREFIX + key;
    const item: CacheItem<T> = {
      value,
      expiry: Date.now() + (ttl * 1000),
    };
    
    try {
      localStorage.setItem(cacheKey, JSON.stringify(item));
    } catch (error) {
      console.error('Failed to cache item:', error);
      // If storage is full, clear old items
      if (error.name === 'QuotaExceededError') {
        this.clearOldCache();
        try {
          localStorage.setItem(cacheKey, JSON.stringify(item));
        } catch (retryError) {
          console.error('Failed to cache item after clearing:', retryError);
        }
      }
    }
  }

  static remove(key: string): void {
    if (typeof window === 'undefined') return;
    
    const cacheKey = CACHE_PREFIX + key;
    localStorage.removeItem(cacheKey);
  }

  static clear(): void {
    if (typeof window === 'undefined') return;
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    }
  }

  private static clearOldCache(): void {
    if (typeof window === 'undefined') return;
    
    const now = Date.now();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(CACHE_PREFIX)) {
        try {
          const item = localStorage.getItem(key);
          if (item) {
            const { expiry } = JSON.parse(item) as CacheItem<unknown>;
            if (expiry < now) {
              localStorage.removeItem(key);
            }
          }
        } catch (error) {
          console.error('Failed to parse cached item during cleanup:', error);
          localStorage.removeItem(key);
        }
      }
    }
  }
}

// Helper function for API caching
export async function withCache<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl = PERFORMANCE_TARGETS.CACHE_DURATION
): Promise<T> {
  // Try to get from cache first
  const cached = await CacheManager.get<T>(key);
  if (cached !== null) {
    return cached;
  }

  // If not in cache, fetch and cache
  const data = await fetchFn();
  CacheManager.set(key, data, ttl);
  return data;
} 