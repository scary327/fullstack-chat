const { Message } = require('../models/models')
const ApiError = require('../error/ApiError')
const events = require('events')

const emitter = new events.EventEmitter()

class messageController {
	async getMessages(req, res) {
		const limit = 10
		const { chat_id } = req.params
		const messages = await Message.findAndCountAll({
			where: { chat_id: chat_id },
			limit,
		})
		emitter.once('newMessage', chatMessage => {
			return res.json(chatMessage)
		})
		//return res.json(messages.rows) //rows - массив объектов полученной записи
	}
	// async getNewMessage(req, res) {
	// 	emitter.once('newMessage', chatMessage => {
	// 		res.json(chatMessage)
	// 	})
	// }
	async createMessage(req, res) {
		const { chat_id } = req.params
		const { user_id, message } = req.body
		const chatMessage = await Message.create({
			chat_id: chat_id,
			user_id: user_id,
			message: message,
		})
		emitter.emit('newMessage', chatMessage)
		return res.json(chatMessage)
	}
}

module.exports = new messageController()
