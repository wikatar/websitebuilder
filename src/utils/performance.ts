export const PERFORMANCE_TARGETS = {
  // Page Load Metrics
  TTFB: 200,                    // Time to First Byte (ms)
  FCP: 1500,                    // First Contentful Paint (ms)
  LCP: 2500,                    // Largest Contentful Paint (ms)
  TTI: 3500,                    // Time to Interactive (ms)
  
  // Interaction Metrics
  FID: 100,                     // First Input Delay (ms)
  CLS: 0.1,                     // Cumulative Layout Shift
  
  // Resource Metrics
  TOTAL_BLOCKING_TIME: 200,     // Total Blocking Time (ms)
  MAX_BUNDLE_SIZE: 200000,      // Maximum bundle size (bytes)
  MAX_IMAGE_SIZE: 100000,       // Maximum image size (bytes)
  
  // API Performance
  API_RESPONSE_TIME: 300,       // API response time (ms)
  CACHE_DURATION: 3600,         // Cache duration (seconds)
};

interface PerformanceMetric {
  metric: string;
  value: number;
  target: number;
  url: string;
}

export async function reportPerformanceMetric(metric: PerformanceMetric) {
  // Check if metric exceeds target
  if (metric.value > metric.target) {
    console.warn(`Performance metric ${metric.metric} exceeded target:`, {
      value: metric.value,
      target: metric.target,
      url: metric.url,
    });
  }

  // Store metric for analysis (implement proper storage/analytics later)
  console.info('Performance metric:', metric);
}

export function measurePagePerformance() {
  if (typeof window === 'undefined') return;

  // Core Web Vitals
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      reportPerformanceMetric({
        metric: entry.name,
        value: entry.value as number,
        target: PERFORMANCE_TARGETS[entry.name as keyof typeof PERFORMANCE_TARGETS] || 0,
        url: window.location.pathname,
      });
    }
  }).observe({ entryTypes: ['web-vitals'] });

  // Custom metrics
  measureCustomMetrics();
}

function measureCustomMetrics() {
  // Time to First Byte
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;

  // JavaScript execution time
  const jsExecutionTime = performance
    .getEntriesByType('resource')
    .filter(entry => entry.initiatorType === 'script')
    .reduce((total, entry) => total + entry.duration, 0);

  reportPerformanceMetric({
    metric: 'TTFB',
    value: ttfb,
    target: PERFORMANCE_TARGETS.TTFB,
    url: window.location.pathname,
  });

  reportPerformanceMetric({
    metric: 'JS_EXECUTION',
    value: jsExecutionTime,
    target: PERFORMANCE_TARGETS.TOTAL_BLOCKING_TIME,
    url: window.location.pathname,
  });
}

export function measureModuleLoadTime(moduleName: string) {
  const loadTime = performance.now();
  reportPerformanceMetric({
    metric: `MODULE_LOAD_${moduleName}`,
    value: loadTime,
    target: PERFORMANCE_TARGETS.TOTAL_BLOCKING_TIME,
    url: window.location.pathname,
  });
}

export function measureImageLoadTime(timestamp: number) {
  reportPerformanceMetric({
    metric: 'IMAGE_LOAD',
    value: timestamp,
    target: PERFORMANCE_TARGETS.TOTAL_BLOCKING_TIME,
    url: window.location.pathname,
  });
} 