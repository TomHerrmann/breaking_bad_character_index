const client = require('../client');

module.exports = {
  fetchCharacters(req, res, next) {
    client
      .query('SELECT * FROM characters ORDER BY name ASC')
      .then((data) => {
        res.locals.characters = data.rows;
      })
      .catch((err) => console.error('Error executing query', err.stack))
      // .then(() => client.end())
      .then(() => next());
  },
};
