// routes/categoryRoutes.js
const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/CategoryController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware.authenticateUser, categoryController.createCategory)
router.get('/', categoryController.getAllCategories)

module.exports = router
