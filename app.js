// app.js

const express = require('express')
const app = express()
const swaggerDocs = require('./utils')

// Middleware para manejar datos JSON
app.use(express.json())

// Rutas
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const commentRoutes = require('./routes/commentRoutes')

// Agrega la documentación de Swagger
app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/categories', categoryRoutes)
app.use('/comments', commentRoutes)
app.use('/', swaggerDocs)

// Iniciar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
