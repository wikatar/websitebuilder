import { ErrorReport } from './errorHandling';

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: Date;
  url?: string;
  metadata?: Record<string, any>;
}

export interface HealthCheck {
  service: string;
  status: 'healthy' | 'degraded' | 'down';
  lastCheck: Date;
  responseTime?: number;
  details?: Record<string, any>;
}

export class MonitoringSystem {
  private static instance: MonitoringSystem;
  private performanceThresholds: Record<string, number>;

  private constructor() {
    this.performanceThresholds = {
      'TTFB': 100, // Time to First Byte (ms)
      'FCP': 1500, // First Contentful Paint (ms)
      'LCP': 2500, // Largest Contentful Paint (ms)
      'CLS': 0.1, // Cumulative Layout Shift
      'FID': 100, // First Input Delay (ms)
    };
  }

  static getInstance(): MonitoringSystem {
    if (!MonitoringSystem.instance) {
      MonitoringSystem.instance = new MonitoringSystem();
    }
    return MonitoringSystem.instance;
  }

  async trackPerformance(metric: PerformanceMetric): Promise<void> {
    // Check if performance is below threshold
    const threshold = this.performanceThresholds[metric.name];
    if (threshold && metric.value > threshold) {
      await this.handlePerformanceIssue(metric);
    }

    // Store metric for analysis
    await this.storeMetric(metric);
  }

  async checkHealth(): Promise<HealthCheck[]> {
    const checks: HealthCheck[] = [];
    
    // Add health checks for different services
    checks.push(await this.checkAPIHealth());
    checks.push(await this.checkDatabaseHealth());
    checks.push(await this.checkCacheHealth());

    return checks;
  }

  private async handlePerformanceIssue(metric: PerformanceMetric): Promise<void> {
    const errorReport: ErrorReport = {
      timestamp: new Date(),
      severity: 'HIGH',
      type: 'PerformanceIssue',
      message: `Performance metric ${metric.name} exceeded threshold: ${metric.value}`,
      metadata: {
        metric,
        threshold: this.performanceThresholds[metric.name],
      },
    };

    // Log performance issue as error
    await this.logError(errorReport);
  }

  private async checkAPIHealth(): Promise<HealthCheck> {
    // Implement API health check
    return {
      service: 'API',
      status: 'healthy',
      lastCheck: new Date(),
    };
  }

  private async checkDatabaseHealth(): Promise<HealthCheck> {
    // Implement database health check
    return {
      service: 'Database',
      status: 'healthy',
      lastCheck: new Date(),
    };
  }

  private async checkCacheHealth(): Promise<HealthCheck> {
    // Implement cache health check
    return {
      service: 'Cache',
      status: 'healthy',
      lastCheck: new Date(),
    };
  }

  private async storeMetric(metric: PerformanceMetric): Promise<void> {
    // Store metric for analysis
    console.log('[METRIC]', metric);
  }

  private async logError(error: ErrorReport): Promise<void> {
    // Use ErrorManager to log errors
    const ErrorManager = (await import('./errorHandling')).ErrorManager;
    await ErrorManager.getInstance().logError(error);
  }
} 