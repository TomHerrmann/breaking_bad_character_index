const { Client } = require('pg');

const connectionString =
  process.env.DATABASE_URL ||
  'postgres://xhpfrdciffpxhx:be14910edd46e49949b773842cf4b1f18d49845f775de2db716e42e0ebdcf16c@ec2-50-17-21-170.compute-1.amazonaws.com:5432/d7eh0snqvo5tph';

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect((err) => {
  if (err) console.log(err);
  else console.log('Connected to database!');
});

module.exports = client;
