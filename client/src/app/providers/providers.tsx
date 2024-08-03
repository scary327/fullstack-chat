import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from 'shared/ui/fallback'

interface IProvider {
	children: JSX.Element
}

export const Providers: FC<IProvider> = ({ children }) => {
	return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>
}
