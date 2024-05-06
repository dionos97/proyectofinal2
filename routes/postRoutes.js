// routes/postRoutes.js
const express = require('express')
const router = express.Router()
const postController = require('../controllers/PostController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware.authenticateUser, postController.createPost)
router.get('/', postController.getAllPosts)
