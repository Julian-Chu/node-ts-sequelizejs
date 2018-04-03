import * as express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("hi~");
});

export default app;

