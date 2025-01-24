'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to terminal
    console.group('Error caught by boundary:');
    console.error('Error:', error);
    console.error('Component stack:', errorInfo.componentStack);
    console.groupEnd();

    // You can also send to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
          <div className="max-w-xl p-8 bg-base-100 shadow-xl rounded-lg">
            <h2 className="text-2xl font-bold text-error mb-4">Something went wrong</h2>
            <div className="bg-base-300 p-4 rounded mb-4">
              <pre className="whitespace-pre-wrap break-words">
                {this.state.error?.message}
              </pre>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 