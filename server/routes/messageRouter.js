const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')

router.post('/:chat_id', messageController.createMessage)
router.get('/:chat_id', messageController.getMessages)

module.exports = router
