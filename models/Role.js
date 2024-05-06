const { DataTypes, Model } = require('sequelize')
const db = require('../config/dbConfig')

class Role extends Model {}

Role.init({
  role_id: {
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
  modelName: 'Role'
})

module.exports = Role
