const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "1221",
  database: "registrations",
  logging: false,
});

module.exports = { db, DataTypes };
