// routes/index.js
const express = require('express')
const router = express.Router()

// Ruta de inicio
router.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Blogging!')
})

// Rutas de otros recursos (usuarios, publicaciones, etc.)
router.use('/users', require('./userRoutes'))
router.use('/posts', require('./postRoutes'))
router.use('/categories', require('./categoryRoutes'))
router.use('/comments', require('./commentRoutes'))

module.exports = router
