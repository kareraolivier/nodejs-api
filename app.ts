import express from "express";
import { Request, Response } from "express";
const app = express();
import blogsRoutes from "./src/blogs";
// import usersRouter from "./users/routes";
import { noStore } from "./src/middlewares";

app.use(express.json());

// Middleware
app.use(noStore);

// Routes
app.get("/", (_: Request, res: Response) =>
  res.send("Hello welcome to my blog")
);
app.use("/blogs", blogsRoutes.router);
// app.use("/users", usersRouter);
export default app;
