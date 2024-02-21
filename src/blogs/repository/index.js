const BlogModel = require("../../models/blog.model");

const findAll = async () => await BlogModel.find({});
const create = async (blogData) => await BlogModel.create(blogData);

module.exports = { findAll, create };
