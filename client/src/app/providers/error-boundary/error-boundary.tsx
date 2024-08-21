import { Component } from 'react'
import { Fallback } from 'shared/ui/fallback'

interface ErrorBoundaryProps {
	children: JSX.Element
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(_: Error): ErrorBoundaryState {
		console.log(_)
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <Fallback />
		}

		return this.props.children
	}
}

export default ErrorBoundary
