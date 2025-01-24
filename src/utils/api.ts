import { PERFORMANCE_TARGETS } from './performance';
import { withCache } from './cache';

interface ApiPerformanceMetric {
  url: string;
  duration: number;
  status: number;
  target: number;
}

interface ApiError {
  url: string;
  error: Error;
  duration: number;
}

async function reportApiPerformance(metric: ApiPerformanceMetric) {
  if (metric.duration > metric.target) {
    console.warn(`API call to ${metric.url} exceeded target response time:`, {
      duration: metric.duration,
      target: metric.target,
      status: metric.status,
    });
  }

  // TODO: Send to analytics service
  console.info('API Performance:', metric);
}

async function reportApiError(error: ApiError) {
  console.error(`API Error for ${error.url}:`, {
    error: error.error,
    duration: error.duration,
  });

  // TODO: Send to error reporting service
}

export async function fetchWithPerformance<T>(
  url: string,
  options?: RequestInit & { skipCache?: boolean }
): Promise<T> {
  const { skipCache = false, ...fetchOptions } = options || {};

  // Use cache if enabled
  if (!skipCache) {
    return withCache<T>(
      `api:${url}`,
      () => performFetch<T>(url, fetchOptions),
      PERFORMANCE_TARGETS.CACHE_DURATION
    );
  }

  return performFetch<T>(url, fetchOptions);
}

async function performFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const startTime = performance.now();
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        'Cache-Control': `max-age=${PERFORMANCE_TARGETS.CACHE_DURATION}`,
      },
    });

    const endTime = performance.now();
    const duration = endTime - startTime;

    // Report API performance
    await reportApiPerformance({
      url,
      duration,
      status: response.status,
      target: PERFORMANCE_TARGETS.API_RESPONSE_TIME,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    await reportApiError({
      url,
      error: error as Error,
      duration: performance.now() - startTime,
    });
    throw error;
  }
}

// Helper for GET requests
export function get<T>(url: string, options?: RequestInit & { skipCache?: boolean }): Promise<T> {
  return fetchWithPerformance<T>(url, {
    ...options,
    method: 'GET',
  });
}

// Helper for POST requests
export function post<T>(url: string, data: unknown, options?: RequestInit): Promise<T> {
  return fetchWithPerformance<T>(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
    skipCache: true, // Always skip cache for POST requests
  });
}

// Helper for PUT requests
export function put<T>(url: string, data: unknown, options?: RequestInit): Promise<T> {
  return fetchWithPerformance<T>(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
    skipCache: true, // Always skip cache for PUT requests
  });
}

// Helper for DELETE requests
export function del<T>(url: string, options?: RequestInit): Promise<T> {
  return fetchWithPerformance<T>(url, {
    ...options,
    method: 'DELETE',
    skipCache: true, // Always skip cache for DELETE requests
  });
} 