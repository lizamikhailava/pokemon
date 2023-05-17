import { useState } from 'react';

function withErrorBoundary(WrappedComponent: Function) {

  return function ErrorBoundary() {
    const [error, setError] = useState<null | unknown>(null);
  
    if (error) {
      return <div>An error occurred: {error.toString()}</div>;
    }
  
    try {
      return WrappedComponent();
    } catch (err: unknown) {
      setError(err);
    }
  };
}

export default withErrorBoundary;