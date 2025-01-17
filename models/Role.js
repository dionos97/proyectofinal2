// models/Role.js
const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/dbConfig')

class Role extends Model {}

Role.init({
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
  sequelize,
  modelName: 'Role'
})

module.exports = Role
