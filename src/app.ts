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

app.post("/users2", async(req: express.Request, res: express.Response, next) => {
  try {
    const user = await Users2.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }}
);

export default app;

