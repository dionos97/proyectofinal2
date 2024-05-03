// routes/postRoutes.js

const express = require('express')
const router = express.Router()

// Controladores de publicaciones
const postController = require('../controllers/postController.js')

// Rutas para las publicaciones
router.post('/', postController.createPost)
router.get('/', postController.getAllPosts)
router.get('/:postId', postController.getPostById)
router.put('/:postId', postController.updatePost)
router.delete('/:postId', postController.deletePost)

module.exports = router
