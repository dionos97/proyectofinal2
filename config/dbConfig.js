// config/dbConfig.js
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('proyectofinal2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
