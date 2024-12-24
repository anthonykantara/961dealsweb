'use client';

import { Component, ErrorInfo, ReactNode, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

function ClientErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <Button onClick={reset} className="w-full">
          Try again
        </Button>
      </div>
    </div>
  );
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  private mounted = false;

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    if (this.mounted) {
      this.setState({ hasError: false, error: undefined });
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ClientErrorFallback 
          error={this.state.error!}
          reset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}