const express = require("express");
const blogsRoutes = require("./routes");
const blogsServices = require("./services");
const router = express.Router();

router.use("/", blogsRoutes);

module.exports = {
  blogsRoutes: router,
  blogsServices,
};
