const blogsService = require("../services");

const getAllBlogs = async (req, res, next) => {
  // Correct the function name
  try {
    const blogs = await blogsService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

const createBlog = async (req, res, next) => {
  try {
    const blogData = req.body;
    const newBlog = await blogsService.createBlog(blogData);
    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllBlogs, createBlog };
