const { Message } = require('../models/models')
const ApiError = require('../error/ApiError')

class messageController {
	async getMessages(req, res) {
		const limit = 10
		const { chat_id } = req.params
		const messages = await Message.findAndCountAll({
			where: { chat_id: chat_id },
			limit,
		})
		return res.json(messages.rows) //rows - массив объектов полученной записи
	}
	async createMessage(req, res) {
		const { chat_id } = req.params
		const { user_id, message } = req.body
		const chatMessage = await Message.create({
			chat_id: chat_id,
			user_id: user_id,
			message: message,
		})
		return res.json(chatMessage)
	}
}

module.exports = new messageController()
