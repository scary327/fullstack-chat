import { ErrorPage } from 'pages/error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from './app.routes'

export const AppRouter = () => {
	const isAuth = false
	return (
		<BrowserRouter>
			<Routes>
				{isAuth &&
					authRoutes.map(({ path, component }) => (
						<Route key={path} path={path} element={component()} />
					))}
				{publicRoutes.map(({ path, component }) => (
					<Route key={path} path={path} element={component()} />
				))}
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}
