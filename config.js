const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "157.230.9.21",
    user: "eekhoorntje",
    password: "mysqlpass",
    database: "running",
    port: 3306
  },
  listPerPage: 20,
};
module.exports = config;
