//sets up database connection
var pg = require('knex')({
  client: 'pg',
  // connection: process.env.DATABASE_URL || 'postgres://localhost:5432/graspdb',
  connection: {
    host     : process.env.DATABASE_URL || 'localhost',
    user     : process.env.DATABASE_USER || '',
    password : process.env.DATABASE_PASSWORD || '',
    database : 'graspdb',
    port: 5432
  },
  searchPath: 'knex,public'
});

module.exports = pg;
