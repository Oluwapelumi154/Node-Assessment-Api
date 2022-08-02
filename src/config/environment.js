const dotenv = require('dotenv');

dotenv.config({ path: '../../.env' });
module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'assesment',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
