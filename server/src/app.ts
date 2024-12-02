import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

export default app;
