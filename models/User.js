// models/User.js
const { DataTypes, Model } = require('sequelize')
const db = require('../config/dbConfig')
const Role = require('./Role')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'User'
})

User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' })

module.exports = User
