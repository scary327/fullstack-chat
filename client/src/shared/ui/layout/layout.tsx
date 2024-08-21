import WestIcon from '@mui/icons-material/West'
import { Button, CircularProgress } from '@mui/material'
import { URLS } from 'app/routers/app.urls'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface LayoutProps {
	children: JSX.Element
}

export const Layout = (props: LayoutProps) => {
	const navigate = useNavigate()
	const location = useLocation()
	const isMainPage = location.pathname === URLS.MAIN
	const handleNavigate = () => {
		navigate(-1)
	}
	return (
		<React.Suspense fallback={<CircularProgress color='primary' />}>
			{!isMainPage && (
				<Button
					onClick={handleNavigate}
					className='font-bold absolute right-0 m-3'
					variant='text'
					color='primary'
					startIcon={<WestIcon />}
				>
					Вернуться назад
				</Button>
			)}
			{props.children}
		</React.Suspense>
	)
}
