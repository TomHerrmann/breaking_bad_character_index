const pool = require('../pool');

module.exports = {
  fetchCharacters(req, res, next) {
    pool
      .query('SELECT * FROM characters ORDER BY name ASC')
      .then((data) => {
        res.locals.characters = data.rows;
      })
      .then(() => next())
      .catch((err) => console.error('Error executing query', err.stack));
  },
};
