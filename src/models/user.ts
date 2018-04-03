import * as Sequelize from "sequelize";
import sequelize from "../services/sequelize";

const User = sequelize.define("users", {
  name: Sequelize.STRING
} );

export default User;