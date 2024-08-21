import { Stack } from '@mui/material'
import { URLS } from 'app/routers/app.urls'
import { useLocation } from 'react-router-dom'
import { Login } from 'widgets/login'
import { Registration } from 'widgets/registration'

export const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === URLS.AUTH.LOGIN

	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			spacing={3}
			style={{ height: '100vh' }}
		>
			{isLogin ? <Login /> : <Registration />}
		</Stack>
	)
}
