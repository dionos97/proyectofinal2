// utils/swagger.js
const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocs = YAML.load('./utils/swagger.yaml');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocs));

module.exports = router;