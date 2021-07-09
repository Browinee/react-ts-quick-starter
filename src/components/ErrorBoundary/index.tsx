import React from 'react';
import FallbackPage from 'Components/FallbackPage';

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 錯誤記錄到一個錯誤回報系統服務
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <FallbackPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
