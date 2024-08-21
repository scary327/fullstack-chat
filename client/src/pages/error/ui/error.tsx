import GppBadIcon from '@mui/icons-material/GppBad'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab'
import { Button, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './error.module.css'

const StyledLink = styled(Link)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}))

export const ErrorPage = () => {
	return (
		<>
			<div className={styles.title}>
				<GppBadIcon color='error' fontSize='large' />
				<Typography variant='h4' color='error' className='font-bold'>
					Такой страницы не существует
				</Typography>
			</div>
			<Typography variant='h6'>
				Проверьте ссылку или вернитесь на главную страницу
			</Typography>
			<Button
				variant='contained'
				size='large'
				color='primary'
				endIcon={<KeyboardTabIcon />}
			>
				<StyledLink to='/'>Вернуться на главную страницу</StyledLink>
			</Button>
		</>
	)
}
