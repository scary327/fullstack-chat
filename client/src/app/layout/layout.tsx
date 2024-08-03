import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	//дописать лоадер
	return (
		<Suspense>
			<Outlet />
		</Suspense>
	)
}
