// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', userController.createUser);
router.get('/', authMiddleware.authenticateUser, userController.getAllUsers);

module.exports = router;