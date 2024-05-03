// models/User.js
const db = require('../config/dbConfig').default

class UserMethods {
  static createUser (data) {
    return db.User.create(data)
  }

  static updateUser (userId, data) {
    return db.User.update(data, { where: { user_id: userId } })
  }

  static deleteUser (userId) {
    return db.User.destroy({ where: { user_id: userId } })
  }

  static getUserById (userId) {
    return db.User.findOne({ where: { user_id: userId } })
  }

  static getAllUsers () {
    return db.User.findAll()
  }
}

const UserModel = db.define('User', {
  user_id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: db.Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = { UserModel, UserMethods }
