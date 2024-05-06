// config/dbConfig.js
const { createConnection } = require('mysql2');

const connection = createConnection({
  host: 'localhost',

  user: 'root',

  password: '',
  
  database: 'proyectofinal2'
});

module.exports = connection;
