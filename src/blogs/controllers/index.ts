import { Request, Response, NextFunction } from "express";
import blogsService from "../services";

const getAllBlogs = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await blogsService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

const getblogById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const blogs = await blogsService.getblogById(id);
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogData = req.body;
    const newBlog = await blogsService.createBlog(blogData);
    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};
const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const blogData = req.body;
    const newBlog = await blogsService.updateBlog(id, blogData);
    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const newBlog = await blogsService.deleteBlog(id);
    res.status(200).json(newBlog);
  } catch (error) {
    next(error);
  }
};
export default { getAllBlogs, createBlog, updateBlog, deleteBlog, getblogById };
