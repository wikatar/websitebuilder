import { errorManager } from './errorHandling';

// Analytics event types
export type EventCategory = 
  | 'page_view'
  | 'error'
  | 'performance'
  | 'user_action'
  | 'content'
  | 'api'
  | 'system';

export interface AnalyticsEvent {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
  timestamp: Date;
}

export interface PerformanceEvent extends AnalyticsEvent {
  category: 'performance';
  metric: string;
  value: number;
  target: number;
  url: string;
}

export interface ErrorEvent extends AnalyticsEvent {
  category: 'error';
  error: Error;
  componentName?: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
}

export interface UserEvent extends AnalyticsEvent {
  category: 'user_action';
  userId?: string;
  sessionId?: string;
  path: string;
}

export interface ContentEvent extends AnalyticsEvent {
  category: 'content';
  contentId: string;
  contentType: string;
  action: 'view' | 'create' | 'update' | 'delete';
  metadata: {
    path: string;
    locale: string;
    version: number;
  };
}

interface AnalyticsProvider {
  name: string;
  initialize(): Promise<void>;
  trackEvent(event: AnalyticsEvent): Promise<void>;
  flush(): Promise<void>;
}

// Google Analytics provider
class GoogleAnalyticsProvider implements AnalyticsProvider {
  name = 'google_analytics';

  async initialize(): Promise<void> {
    // TODO: Initialize Google Analytics
    console.info('Initializing Google Analytics');
  }

  async trackEvent(event: AnalyticsEvent): Promise<void> {
    // TODO: Implement Google Analytics tracking
    console.info('Tracking event in Google Analytics:', event);
  }

  async flush(): Promise<void> {
    // TODO: Implement flush mechanism
    console.info('Flushing Google Analytics events');
  }
}

// Custom analytics provider for internal tracking
class InternalAnalyticsProvider implements AnalyticsProvider {
  name = 'internal';
  private eventQueue: AnalyticsEvent[] = [];
  private batchSize = 50;
  private flushInterval = 60000; // 1 minute

  async initialize(): Promise<void> {
    // Set up periodic flush
    setInterval(() => this.flush(), this.flushInterval);
  }

  async trackEvent(event: AnalyticsEvent): Promise<void> {
    this.eventQueue.push(event);
    
    if (this.eventQueue.length >= this.batchSize) {
      await this.flush();
    }
  }

  async flush(): Promise<void> {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    try {
      // TODO: Implement actual API call to store events
      console.info('Flushing internal analytics events:', events);
    } catch (error) {
      // Re-queue events on failure
      this.eventQueue.unshift(...events);
      await errorManager.logError(error as Error, {
        category: 'system',
        severity: 'high',
        componentName: 'InternalAnalyticsProvider',
      });
    }
  }
}

class AnalyticsManager {
  private static instance: AnalyticsManager;
  private providers: Map<string, AnalyticsProvider>;
  private initialized = false;

  private constructor() {
    this.providers = new Map();
  }

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;

    // Add default providers
    this.addProvider(new GoogleAnalyticsProvider());
    this.addProvider(new InternalAnalyticsProvider());

    // Initialize all providers
    await Promise.all(
      Array.from(this.providers.values()).map(provider => provider.initialize())
    );

    this.initialized = true;
  }

  addProvider(provider: AnalyticsProvider): void {
    this.providers.set(provider.name, provider);
  }

  removeProvider(name: string): void {
    this.providers.delete(name);
  }

  async trackEvent(event: AnalyticsEvent): Promise<void> {
    if (!this.initialized) {
      await this.initialize();
    }

    const trackingPromises = Array.from(this.providers.values()).map(provider =>
      provider.trackEvent(event).catch(error => {
        errorManager.logError(error as Error, {
          category: 'system',
          severity: 'medium',
          componentName: 'AnalyticsManager',
          metadata: { provider: provider.name, event },
        });
      })
    );

    await Promise.all(trackingPromises);
  }

  async trackError(error: Error, metadata?: Record<string, unknown>): Promise<void> {
    const event: ErrorEvent = {
      category: 'error',
      action: 'error_occurred',
      error,
      severity: 'high',
      timestamp: new Date(),
      metadata,
    };

    await this.trackEvent(event);
  }

  async trackPerformance(metric: string, value: number, target: number): Promise<void> {
    const event: PerformanceEvent = {
      category: 'performance',
      action: 'metric_recorded',
      metric,
      value,
      target,
      url: typeof window !== 'undefined' ? window.location.pathname : '',
      timestamp: new Date(),
    };

    await this.trackEvent(event);
  }

  async trackUserAction(
    action: string,
    metadata?: Record<string, unknown>
  ): Promise<void> {
    const event: UserEvent = {
      category: 'user_action',
      action,
      path: typeof window !== 'undefined' ? window.location.pathname : '',
      timestamp: new Date(),
      metadata,
    };

    await this.trackEvent(event);
  }

  async trackContent(
    action: 'view' | 'create' | 'update' | 'delete',
    contentId: string,
    contentType: string,
    metadata: ContentEvent['metadata']
  ): Promise<void> {
    const event: ContentEvent = {
      category: 'content',
      action,
      contentId,
      contentType,
      metadata,
      timestamp: new Date(),
    };

    await this.trackEvent(event);
  }

  async flush(): Promise<void> {
    const flushPromises = Array.from(this.providers.values()).map(provider =>
      provider.flush().catch(error => {
        errorManager.logError(error as Error, {
          category: 'system',
          severity: 'medium',
          componentName: 'AnalyticsManager',
          metadata: { provider: provider.name },
        });
      })
    );

    await Promise.all(flushPromises);
  }
}

// Export singleton instance
export const analyticsManager = AnalyticsManager.getInstance(); 