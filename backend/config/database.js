const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("library", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
