// routes/userRoutes.js
const express = require('express')
const router = express.Router()

// Controladores de usuarios
const userController = require('../controllers/userController.js')

// Rutas para los usuarios
router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/:userId', userController.getUserById)
router.put('/:userId', userController.updateUser)
router.delete('/:userId', userController.deleteUser)

module.exports = router
