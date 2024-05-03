// app.js
const express = require('express')
const app = express()

// Middleware para manejar datos JSON
app.use(express.json())

// Rutas
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/userRoutes')
// Incluir las demás rutas aquí...

app.use('/', indexRoutes)
app.use('/users', userRoutes)
// Incluir las demás rutas aquí...

// Iniciar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
