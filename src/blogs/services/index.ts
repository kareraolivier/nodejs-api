import { IBlog } from "../../models/blog.model";
import blogRepository from "../repository";

const getAllBlogs = async (): Promise<Array<IBlog>> => {
  return await blogRepository.findAll();
};

const getblogById = async (id: string): Promise<IBlog | null> => {
  return await blogRepository.findOne(id);
};

const createBlog = async (blogData: IBlog): Promise<IBlog> => {
  return await blogRepository.create(blogData);
};

const updateBlog = async (
  id: string,
  blogData: IBlog
): Promise<IBlog | null> => {
  return await blogRepository.update(id, blogData);
};

const deleteBlog = async (id: string): Promise<IBlog | null> => {
  return await blogRepository.deleteBlog(id);
};
export default { getAllBlogs, createBlog, updateBlog, deleteBlog, getblogById };
