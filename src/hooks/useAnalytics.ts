import { useCallback, useEffect } from 'react';
import { analyticsManager, AnalyticsEvent } from '@/utils/analytics';

export function useAnalytics() {
  useEffect(() => {
    // Initialize analytics when the hook is first used
    analyticsManager.initialize();
  }, []);

  const trackEvent = useCallback(async (event: AnalyticsEvent) => {
    await analyticsManager.trackEvent(event);
  }, []);

  const trackPageView = useCallback(async (path: string, metadata?: Record<string, unknown>) => {
    await analyticsManager.trackEvent({
      category: 'page_view',
      action: 'view',
      label: path,
      metadata,
      timestamp: new Date(),
    });
  }, []);

  const trackError = useCallback(async (error: Error, metadata?: Record<string, unknown>) => {
    await analyticsManager.trackError(error, metadata);
  }, []);

  const trackPerformance = useCallback(async (metric: string, value: number, target: number) => {
    await analyticsManager.trackPerformance(metric, value, target);
  }, []);

  const trackUserAction = useCallback(async (action: string, metadata?: Record<string, unknown>) => {
    await analyticsManager.trackUserAction(action, metadata);
  }, []);

  const trackContent = useCallback(async (
    action: 'view' | 'create' | 'update' | 'delete',
    contentId: string,
    contentType: string,
    metadata: {
      path: string;
      locale: string;
      version: number;
    }
  ) => {
    await analyticsManager.trackContent(action, contentId, contentType, metadata);
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackError,
    trackPerformance,
    trackUserAction,
    trackContent,
  };
} 