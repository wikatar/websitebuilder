type MetricName = 'LCP' | 'FID' | 'CLS' | 'TTFB' | 'FCP';

interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const thresholds = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
};

export const getRating = (name: MetricName, value: number): PerformanceMetric['rating'] => {
  if (value <= thresholds[name].good) return 'good';
  if (value <= thresholds[name].poor) return 'needs-improvement';
  return 'poor';
};

export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Observer for LCP
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    const metric: PerformanceMetric = {
      name: 'LCP',
      value: lastEntry.startTime,
      rating: getRating('LCP', lastEntry.startTime),
    };
    logMetric(metric);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Observer for FID
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      const metric: PerformanceMetric = {
        name: 'FID',
        value: entry.processingStart - entry.startTime,
        rating: getRating('FID', entry.processingStart - entry.startTime),
      };
      logMetric(metric);
    });
  }).observe({ entryTypes: ['first-input'] });

  // Observer for CLS
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        clsValue += (entry as any).value;
        const metric: PerformanceMetric = {
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
        };
        logMetric(metric);
      }
    });
  }).observe({ entryTypes: ['layout-shift'] });

  // Navigation Timing API for TTFB and FCP
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');

    // TTFB
    const ttfb: PerformanceMetric = {
      name: 'TTFB',
      value: navigation.responseStart - navigation.requestStart,
      rating: getRating('TTFB', navigation.responseStart - navigation.requestStart),
    };
    logMetric(ttfb);

    // FCP
    const fcpEntry = paint.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      const fcp: PerformanceMetric = {
        name: 'FCP',
        value: fcpEntry.startTime,
        rating: getRating('FCP', fcpEntry.startTime),
      };
      logMetric(fcp);
    }
  });
};

const logMetric = (metric: PerformanceMetric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance Metric - ${metric.name}:`, {
      value: Math.round(metric.value),
      rating: metric.rating,
    });
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // TODO: Implement analytics tracking
    // analytics.track('Performance Metric', {
    //   metric: metric.name,
    //   value: metric.value,
    //   rating: metric.rating,
    // });
  }
}; 