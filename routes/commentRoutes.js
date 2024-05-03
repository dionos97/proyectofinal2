// routes/commentRoutes.js

const express = require('express')
const router = express.Router()

// Controladores de comentarios
const commentController = require('../controllers/CommentController.js')

// Rutas para los comentarios
router.post('/', commentController.createComment)
router.get('/', commentController.getAllComments)
router.get('/:commentId', commentController.getCommentById)
router.put('/:commentId', commentController.updateCommentById)
router.delete('/:commentId', commentController.deleteCommentById)

module.exports = router
