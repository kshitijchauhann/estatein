import { Component, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-screen bg-[#141414]">
                    <div className="text-center p-6">
                        <h2 className="text-white text-2xl mb-4 font-bold">Something went wrong</h2>
                        <p className="text-zinc-400 mb-6">We apologize for the inconvenience.</p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="text-white bg-[#703BF7] px-6 py-2 rounded-lg hover:bg-[#5d2ed1]"
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
