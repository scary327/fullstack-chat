import { Stack } from '@mui/system'

export const Profile = () => {
	const person = {
		id: 1,
		username: 'Oleg',
		email: 'oleg@example.com',
		chatNumber: 'gjsbfgkjbskjds-12312r4jgjf-smdfklf',
	}

	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			spacing={3}
			style={{ height: '100vh' }}
		></Stack>
	)
}
