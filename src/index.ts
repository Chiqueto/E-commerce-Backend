import express, { Express, Request, Response } from "express";
import { PORT } from "./screts";
import rootRouter from "./routes";
import { PrismaClient } from "./generated/prisma";

const app: Express = express();

app.use(express.json());

app.use("/api", rootRouter);

export const prismaClient = new PrismaClient();
app.listen(PORT, () => console.log(`App working on port ${PORT}`));
