// models/Category.js
const { DataTypes, Model } = require('sequelize');
const db = require('../config/dbConfig');

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Category'
});

module.exports = Category;