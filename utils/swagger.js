// utils/swagger.js

const express = require('express')
const router = express.Router()
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Define las opciones de Swagger
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Blogging Interactiva',
      version: '1.0.0',
      description: 'Documentación de la API de Blogging Interactiva'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      }
    ]
  },
  apis: ['./routes/index.js']
}

// Genera la documentación de Swagger
const specs = swaggerJsdoc(options)
router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(specs))

module.exports = router
