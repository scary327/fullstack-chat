const { Chat } = require('../models/models')
const ApiError = require('../error/ApiError')

class chatConroller {
	async getChat(req, res) {
		const { chat_id } = req.params
		const chat = await Chat.findOne({ where: { chat_id: chat_id } })
		return res.json(chat)
	}
	async create(req, res) {
		const { users_number, messages } = req.body
		const chat = await Chat.create({ users_number, messages })
		return res.json(chat)
	}
}

module.exports = new chatConroller()
