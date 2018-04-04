import * as express from "express";
import users from "./models/user";
import "./sequelize-ts";
import { Users2 } from "./models/Users2";

const app = express();

app.get("/user", async (req: express.Request, res: express.Response) => {
  const user: any = await users.findOne({ attributes: ["name"] });
  const { name } = user;
  res.send(name);
});

app.get("/users2", async(req: express.Request, res: express.Response) => {
  console.log();
  const user = await Users2.findOne();
  res.send(user.name);
});

export default app;

