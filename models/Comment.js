// models/Comment.js
const { DataTypes, Model } = require('sequelize')
const db = require('../config/dbConfig')

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Comment'
})

module.exports = Comment
