import { Users2 } from "./models/Users2";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "Test",
  username: "test",
  password: "1234",
  dialect: "postgres",
  port: 5432,
  // modelPaths: [ __dirname + "/models"]  // models has some class without @table, use addModels
});
sequelize.addModels([Users2]);
