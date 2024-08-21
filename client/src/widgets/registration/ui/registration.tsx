import { Button, Stack, TextField, Typography } from '@mui/material'
import { URLS } from 'app/routers/app.urls'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface IForm {
	username: string
	email: string
	password: string
}

export const Registration = () => {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm<IForm>({
		mode: 'onChange',
	})

	const handleNavigate = () => navigate(URLS.AUTH.LOGIN)

	const onSubmit: SubmitHandler<IForm> = data => {
		console.log(data)
		navigate(URLS.AUTH.LOGIN)
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
				Регистрация
			</Typography>
			<TextField
				id='username'
				fullWidth
				style={{ minWidth: '450px' }}
				label='Имя пользователя'
				variant='filled'
				color='primary'
				autoComplete='on'
				{...register('username')}
			/>
			<TextField
				id='email'
				fullWidth
				label='Почта'
				variant='filled'
				color='primary'
				{...register('email')}
			/>
			<TextField
				fullWidth
				id='password'
				label='Пароль'
				variant='filled'
				color='primary'
				{...register('password')}
			/>
			<div className='flex flex-row-reverse justify-between w-full gap-x-6 items-center'>
				<Button
					type='submit'
					variant='contained'
					size='large'
					className='font-bold'
					color='primary'
					onClick={handleSubmit(onSubmit)}
				>
					Зарегистрироваться
				</Button>
				<Button
					onClick={handleNavigate}
					type='button'
					variant='text'
					color='primary'
					size='large'
					className='font-bold'
				>
					Уже есть аккаунт?
				</Button>
			</div>
		</Stack>
	)
}
