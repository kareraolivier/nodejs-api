import express from "express";
import blogsController from "./controllers";

const router = express.Router();

router.get("/", blogsController.getAllBlogs);
router.get("/:id", blogsController.getblogById);
router.post("/", blogsController.createBlog);
router.patch("/:id", blogsController.updateBlog);
router.delete("/:id", blogsController.deleteBlog);

export default router;
