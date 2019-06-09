require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    timezone:'+08:00'
  },
  test: {
    username: 'root',
    password: 'null',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
