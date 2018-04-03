import * as express from "express";
import users from "./models/user";

const app = express();

app.get("/", async (req: express.Request, res: express.Response) => {
  const user: any = await users.findOne({ attributes: ["name"] });
  const { name } = user;
  res.send(name);
});

export default app;

