// routes/categoryRoutes.js

const express = require('express')
const router = express.Router()

// Controladores de categorías
const categoryController = require('../controllers/CategoryController.js')

// Rutas para las categorías
router.post('/', categoryController.createCategory)
router.get('/', categoryController.getAllCategory)
router.get('/:categoryId', categoryController.getCategoryById)
router.put('/:categoryId', categoryController.updateCategoryById)
router.delete('/:categoryId', categoryController.deleteCategoryById)

module.exports = router
