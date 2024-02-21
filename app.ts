import express from "express";
const app = express();
import blogsRoutes from "./src/blogs";
// const usersRouter = require("./users/routes");
import { noStore } from "./src/middlewares";

app.use(express.json());

// Middleware
app.use(noStore);

// Routes
app.get("/", (_: any, res: any) => res.send("Hello welcome to my blog"));
app.use("/blogs", blogsRoutes.router);
// app.use("/users", usersRouter);
export default app;
