import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { theme } from 'app/styles'
import { FC } from 'react'
import ErrorBoundary from './error-boundary/error-boundary'

interface IProvider {
	children: JSX.Element
}

export const Providers: FC<IProvider> = ({ children }) => {
	return (
		<ErrorBoundary>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles styles={{ body: { backgroundColor: '#222222' } }} />
				{children}
			</ThemeProvider>
		</ErrorBoundary>
	)
}
