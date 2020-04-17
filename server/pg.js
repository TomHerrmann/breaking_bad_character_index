const { Pool } = require('pg');

// **** REPLACE STRING BELOW *****
const connectionString = 'CONNECTION STRING FOR DB';

const pool = new Pool({
  connectionString,
  port: 5432,
});

pool.connect((err) => {
  if (err) console.log(err);
  else console.log('Connected to database on 5432!');
});

module.exports = pool;
