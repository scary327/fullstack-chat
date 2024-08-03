import { Link, useRouteError } from 'react-router-dom'
import { RejectedDataType } from 'shared/types'
import styles from './fallback.module.css'

export const Fallback = () => {
	const error = useRouteError()
	const knownError = error as RejectedDataType

	return (
		<div role='alert' className={styles.container}>
			<div>
				<h1>Oops! Something went wrong</h1>
				<p>{knownError.messageError}</p>
			</div>
			<Link to='/'>Вернуться на главную страницу</Link>
		</div>
	)
}
