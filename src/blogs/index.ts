import express from "express";
import blogsRoutes from "./routes";
import blogsServices from "./services";
const router = express.Router();

router.use("/", blogsRoutes);

export default {
  router,
  blogsServices,
};
