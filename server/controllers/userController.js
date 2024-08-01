const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Chat } = require('../models/models')
const { v4: uuidv4 } = require('uuid')

const generateJwt = (id, email, username, chat_number) => {
	return jwt.sign(
		{
			id: id,
			email: email,
			username: username,
			chat_number: chat_number,
		},
		process.env.SECRET_KEY,
		{
			expiresIn: '24h',
		}
	)
}

class userConroller {
	async registration(req, res, next) {
		const { email, password, username } = req.body
		if (!email || !password || !username) {
			return next(
				ApiError.badRequest('Неккоректный email, password или username')
			)
		}
		const candidate = await User.findOne({ where: { email } })
		const candidate2 = await User.findOne({ where: { username } })
		if (candidate || candidate2) {
			return next(
				ApiError.badRequest(
					'Пользователь с таким email или username уже существует'
				)
			)
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const chatNumber = uuidv4()
		const user = await User.create({
			email,
			password_hash: hashPassword,
			username: username,
			chat_number: chatNumber,
		})
		const token = generateJwt(
			user.id,
			user.email,
			user.username,
			user.chat_number
		)
		return res.json({ token })
	}
	async login(req, res, next) {
		const { email, password } = req.body
		const user = await User.findOne({ where: { email } })
		if (!user) {
			return next(
				ApiError.internal('Пользователя с таким email не существует!')
			)
		}
		let comparePassword = bcrypt.compareSync(password, user.password_hash)
		if (!comparePassword) {
			return next(ApiError.internal('Указан неверный пароль!'))
		}
		const token = generateJwt(
			user.id,
			user.email,
			user.username,
			user.chat_number
		)
		return res.json({ token })
	}
	async check(req, res, next) {
		const token = generateJwt(
			req.user.id,
			req.user.email,
			req.user.username,
			req.user.chat_number
		)
		return res.json({ token })
	}
}

module.exports = new userConroller()
