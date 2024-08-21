import { Button, Stack, TextField, Typography } from '@mui/material'
import { URLS } from 'app/routers/app.urls'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface IForm {
	email: string
	password: string
}

export const Login = () => {
	const navigate = useNavigate()
	const handleNavigate = () => {
		navigate(URLS.AUTH.REGISTRATION)
	}

	const { register, handleSubmit } = useForm<IForm>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IForm> = data => {
		console.log(data)
		navigate(`${URLS.PROFILE}/1`)
	}

	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			spacing={3}
			style={{ height: '100vh' }}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Typography variant='h3' className='font-bold mb-4'>
				Вход
			</Typography>
			<TextField
				id='email'
				style={{ minWidth: '450px' }}
				fullWidth
				label='Почта'
				variant='filled'
				color='secondary'
				{...register('email')}
			/>
			<TextField
				fullWidth
				id='password'
				label='Пароль'
				variant='filled'
				color='secondary'
				{...register('password')}
			/>
			<div className='flex flex-row-reverse w-full justify-between gap-x-6 items-center'>
				<Button
					type='submit'
					variant='contained'
					size='large'
					className='font-bold'
					color='secondary'
					onClick={handleSubmit(onSubmit)}
				>
					Войти
				</Button>
				<Button
					onClick={handleNavigate}
					type='button'
					variant='text'
					color='secondary'
					size='large'
					className='font-bold'
				>
					Нет аккаунта?
				</Button>
			</div>
		</Stack>
	)
}
