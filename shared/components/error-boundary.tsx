import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const defaultState: State = {
            hasError: false,
            error: undefined,
        };
        this.state = defaultState;
    }

    state: State = {
        hasError: false,
    };
    //props: Props;

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error: error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        let additionalProperties: Record<string, string>;

        if (errorInfo?.componentStack) {
            additionalProperties = {
                componentStack: errorInfo.componentStack,
            };
        }
    }

    render() {
        const props = this.props;
        const state = this.state;

        if (state.hasError) {
            return React.isValidElement(props.fallback) ? (
                props.fallback
            ) : (
                <div> Oops, looks like an unhandled exception happened.</div>
            );
        }
        return this.props.children;
    }
}

const ComponentErrorBoundary = (props: any) => {
	const { children } = props;
	return <ErrorBoundary>{children}</ErrorBoundary>;
};

export { ErrorBoundary, ComponentErrorBoundary };