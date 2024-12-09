import React, { ErrorInfo, ReactNode } from 'react';

type FallbackRender = (error: Error) => ReactNode;
type FallbackNode = ReactNode | FallbackRender;

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: FallbackNode | FallbackRender;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  // detect errors on board
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(this.state.error!);
      }

      if (this.props.fallback) {
        return this.props.fallback;
      }

      // default
      return (
        <div className='error-boundary-fallback'>
          <h2>Algo salió mal</h2>
          <p>Ha ocurrido un error inesperado</p>
          <button onClick={this.resetError}>Reintentar</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// wrapper error component
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: FallbackNode
) {
  return (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
}
