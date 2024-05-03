// models/Post.js
const db = require('../config/dbConfig').default

class PostMethods {
  static createUser (data) {
    return db.Post.create(data)
  }

  static updateUser (postId, data) {
    return db.Post.update(data, { where: { user_id: postId } })
  }

  static deleteUser (postId) {
    return db.Post.destroy({ where: { user_id: postId } })
  }

  static getUserById (postId) {
    return db.Post.findOne({ where: { user_id: postId } })
  }

  static getAllPost () {
    return db.Post.findAll()
  }
}

const PostModel = db.define('Post', {
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

module.exports = { PostModel, PostMethods }
