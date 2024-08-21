import { Auth } from 'pages/auth'
import { Chat } from 'pages/chat'
import { Main } from 'pages/main'
import { Profile } from 'pages/profile'
import { URLS } from './app.urls'

export const authRoutes = [
	{
		path: URLS.CHAT + '/:chat_id',
		component: Chat,
	},
	{
		path: URLS.PROFILE + '/:id',
		component: Profile,
	},
]

export const publicRoutes = [
	{
		path: URLS.AUTH.REGISTRATION,
		component: Auth,
	},
	{
		path: URLS.AUTH.LOGIN,
		component: Auth,
	},
	{
		path: URLS.MAIN,
		component: Main,
	},
]
