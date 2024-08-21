import { ErrorPage } from 'pages/error'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'shared/ui/layout'
import { authRoutes, publicRoutes } from './app.routes'

export const AppRouter = () => {
	const isAuth = true

	return (
		<Routes>
			{isAuth &&
				authRoutes.map(({ path, component }) => (
					<Route
						key={path}
						path={path}
						element={<Layout>{component()}</Layout>}
					/>
				))}
			{publicRoutes.map(({ path, component }) => (
				<Route
					key={path}
					path={path}
					element={<Layout>{component()}</Layout>}
				/>
			))}
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}
