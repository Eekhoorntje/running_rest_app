const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "eekhoorntje",
    password: "mysqlpass",
    database: "running",
  },
  listPerPage: 10,
};
module.exports = config;
