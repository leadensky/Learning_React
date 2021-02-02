import React, {Component} from "react";

export function ErrorScreen({ error }) {
    return (
      <div className="error">
        <h3>...something went wrong</h3>
        <p>We cannot process your request at this moment.</p>
        <p>ERROR: {error.message}</p>
      </div>
    );
  }

export default class ErrorBoundary extends Component {
    state = {error: null};

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        const {error} = this.state;
        const {children, fallback} = this.props;

        if(error && !fallback) return <ErrorScreen error={error} />;
        if(error) return {fallback};
        return children;
    }
}