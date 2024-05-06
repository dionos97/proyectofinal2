// routes/commentRoutes.js
const express = require('express')
const router = express.Router()
const commentController = require('../controllers/CommentController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware.authenticateUser, commentController.createComment)
router.get('/', commentController.getAllComments)

module.exports = router
