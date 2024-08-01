require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlinMiddleware')

const PORT = process.env.PORT || 5031

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// Обработка ошибок, последний middleware
app.use(errorHandler)

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Working' })
})

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize
			.sync()
			.then(() => {
				{
					console.log('БД синхронизирована')
				}
			})
			.catch(err => {
				console.error('Ошибка синхронизации с бд')
			})
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()
