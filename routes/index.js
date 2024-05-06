// routes/index.js
const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const postRoutes = require('./postRoutes')
const categoryRoutes = require('./categoryRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes)
router.use('/posts', postRoutes)
router.use('/categories', categoryRoutes)
router.use('/comments', commentRoutes)

module.exports = router
