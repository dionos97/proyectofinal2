// models/Post.js
const { DataTypes, Model } = require('sequelize');
const db = require('../config/dbConfig');

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Post'
});

module.exports = Post;
