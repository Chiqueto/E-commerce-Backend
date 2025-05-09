import express, { Express, Request, Response } from "express";
import { PORT } from "./screts";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log("App working on port 3000!"));
