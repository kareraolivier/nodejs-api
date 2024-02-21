const blogsService = require("../services");

exports.getAllblogs = async (req, res, next) => {
  try {
    const blogs = await blogsService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};
