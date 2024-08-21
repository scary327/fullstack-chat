import { Stack, Typography } from '@mui/material'

export const Fallback = () => {
	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			spacing={3}
			style={{ height: '100vh', backgroundColor: '#222222' }}
		>
			<Typography variant='h3' className='font-bold mb-4 text-white'>
				Что-то пошло не так...
			</Typography>
			<Typography variant='h5' className='font-bold text-white'>
				Попробуйте перезагрузить страницу или вернуться назад
			</Typography>
		</Stack>
	)
}
