import { createTheme } from '@mui/material'
import { cyan, deepPurple, red } from '@mui/material/colors'

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: cyan[500],
			contrastText: '#222222',
		},
		secondary: {
			main: deepPurple[400],
			contrastText: '#222222',
		},
		error: {
			main: red[500],
			contrastText: '#ffffff',
		},
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
})

export default theme
