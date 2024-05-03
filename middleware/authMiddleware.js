const express = require('express')
const app = express()

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Algo salió mal!')
})
