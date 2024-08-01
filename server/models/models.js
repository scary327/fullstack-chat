const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	username: { type: DataTypes.STRING, unique: true, allowNull: false },
	email: { type: DataTypes.STRING, unique: true, allowNull: false },
	password_hash: { type: DataTypes.STRING },
	chat_number: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Chat = sequelize.define('chat', {
	chat_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	users_number: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
})

const Message = sequelize.define('message', {
	message_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	message: { type: DataTypes.STRING, allowNull: false },
	user_id: { type: DataTypes.INTEGER, allowNull: false },
	chat_id: { type: DataTypes.INTEGER, allowNull: false },
})

User.hasOne(Chat)
Chat.belongsTo(User)
Chat.hasMany(Message, { foreignKey: 'chat_id' })
Message.belongsTo(Chat, { foreignKey: 'chat_id' })

module.exports = { User, Chat, Message }
