import { Button, Stack, Typography } from '@mui/material'
import { URLS } from 'app/routers/app.urls'
import { theme } from 'app/styles'
import { useNavigate } from 'react-router-dom'

const glowStyle = {
	color: theme.palette.primary.main,
	textShadow: `0 0 1px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}, 0 0 10px ${theme.palette.primary.main}`,
}

export const Main = () => {
	const navigate = useNavigate()
	const handleNavigate = () => {
		navigate(URLS.AUTH.REGISTRATION)
	}

	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			spacing={3}
			style={{ height: '100vh' }}
		>
			<Typography variant='h2' className='font-bold'>
				<span style={glowStyle}>G</span>i<span style={glowStyle}>G</span>a
				<span style={glowStyle}>C</span>hat
			</Typography>
			<Typography variant='h5' className='font-bold'>
				Чат, в котором не на что смотреть
			</Typography>
			<Button
				variant='contained'
				className='font-bold'
				color='primary'
				size='large'
				onClick={() => handleNavigate()}
			>
				Присоединиться
			</Button>
		</Stack>
	)
}
