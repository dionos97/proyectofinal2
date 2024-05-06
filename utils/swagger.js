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
  apis: ['./routes/*.js'] // Cambia './routes/index.js' por './routes/*.js'
};

// Genera la documentación de Swagger
const specs = swaggerJsdoc(options)
router.use('/', swaggerUi.serve); // Cambie '/api-docs' por '/'
router.get('/', swaggerUi.setup(specs)) // Cambie '/api-docs' por '/'

module.exports = router;
