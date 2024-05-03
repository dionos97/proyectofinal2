// config/dbConfig.js
import { createConnection } from 'mysql2'

const connection = createConnection({

  host: 'localhost',

  user: 'root',

  password: '',

  database: 'proyectofinal2'
})

export default connection
