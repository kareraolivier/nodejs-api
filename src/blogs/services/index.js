const blogRepository = require("../repository");

const getAllBlogs = async () => await blogRepository.findAll();
const createBlog = async (blogData) => await blogRepository.create(blogData);

module.exports = { getAllBlogs, createBlog };
