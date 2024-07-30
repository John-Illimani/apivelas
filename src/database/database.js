import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "1234", {
  host: "localhost",
  port: 5437,
  dialect: "postgres",
});
