const { Pool } = require('pg');

const connectionString =
  'postgres://tqflypco:QkT4bWcd7jt4j6vSzzOaCisq6EqFVJ-x@drona.db.elephantsql.com:5432/tqflypco';

const pool = new Pool({
  connectionString,
  port: 5432,
});

pool.connect((err) => {
  if (err) console.log(err);
  else console.log('Connected to database on 5432!');
});

module.exports = pool;
