import * as express from "express";
import users from "./models/user";
import "./sequelize-ts";
import { Users2 } from "./models/Users2";
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/user", async (req: express.Request, res: express.Response) => {
  const user: any = await users.findOne({ attributes: ["name"] });
  const { name } = user;
  res.send(name);
});

app.get("/users2", async(req: express.Request, res: express.Response) => {
  console.log();
  const user = await Users2.findOne();
  res.send(user);
});

app.post("/users2", async(req: express.Request, res: express.Response) => {
  const user = new Users2();
  console.log("body", req.body);
  user.name = req.body.name;
  user.password = req.body.password;
  user.save();
  res.status(201).send();
});

export default app;

