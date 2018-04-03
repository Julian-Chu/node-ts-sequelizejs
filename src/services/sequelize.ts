import * as Sequelize from "sequelize";

const db = "Test";
const user = "test";
const pw = "1234";

const sequelize = new Sequelize(db, user, pw, {
  dialect: "postgres",
  port: 5432
});

sequelize.authenticate();
export default sequelize;