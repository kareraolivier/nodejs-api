const express = require("express");
const app = express();
const { blogsRoutes } = require("./src/blogs");
// const usersRouter = require("./users/routes");
const middleware = require("./src/middlewares");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(middleware);

// Routes
app.get("/", (_, res) => res.send("Hello welcome to my blog"));
app.use("/blogs", blogsRoutes);
// app.use("/users", usersRouter);
module.exports = app;
