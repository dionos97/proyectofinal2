// models/category.js
const db = require('../config/dbConfig').default

class CategoryMethods {
  static createUser (data) {
    return db.Category.create(data)
  }

  static updateUser (categoryId, data) {
    return db.Category.update(data, { where: { user_id: categoryId } })
  }

  static deleteUser (categoryId) {
    return db.Category.destroy({ where: { user_id: categoryId } })
  }

  static getUserById (categoryId) {
    return db.Category.findOne({ where: { user_id: categoryId } })
  }

  static getAllcategory () {
    return db.Category.findAll()
  }
}

const CategoryModel = db.define('Category', {
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

module.exports = { CategoryModel, CategoryMethods }
