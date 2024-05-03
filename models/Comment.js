// models/Comment.js

const db = require('../config/dbConfig').default

class CommentMethods {
  static createUser (data) {
    return db.Comment.create(data)
  }

  static updateUser (commentId, data) {
    return db.Comment.update(data, { where: { user_id: commentId } })
  }

  static deleteUser (commentId) {
    return db.Comment.destroy({ where: { user_id: commentId } })
  }

  static getUserById (commentId) {
    return db.Comment.findOne({ where: { user_id: commentId } })
  }

  static getAllComment () {
    return db.Comment.findAll()
  }
}

const CommentModel = db.define('Comment', {
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

module.exports = { CommentModel, CommentMethods }
