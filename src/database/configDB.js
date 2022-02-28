const config = {
  development: {
    username: "root",
    password: null,
    database: "mundodisney_dev",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "mundodisney_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "mundodisney_pr",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = config;