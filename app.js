// app.js
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerRouter = require('./utils/swagger')
const path = require('path')
app.use(express.json())
// Servir el contenido estático del frontend
app.use(express.static(path.join(__dirname, 'frontend')))
// Rutas
const indexRoutes = require('./routes')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const commentRoutes = require('./routes/commentRoutes')

// Agregar documentación de Swagger
app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs', swaggerUi.setup(swaggerRouter))

// Añadir rutas
app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/categories', categoryRoutes)
app.use('/comments', commentRoutes)

// Iniciar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
