import BlogModel, { IBlog } from "../../models/blog.model";

const findAll = async (): Promise<IBlog[]> => {
  return await BlogModel.find({});
};

const create = async (blogData: Partial<IBlog>): Promise<IBlog> => {
  return await BlogModel.create(blogData);
};

const update = async (
  _id: string,
  blogData: Partial<IBlog>
): Promise<IBlog | null> => {
  return await BlogModel.findByIdAndUpdate(_id, blogData, { new: true });
};

const deleteBlog = async (_id: string): Promise<IBlog | null> => {
  return await BlogModel.findByIdAndDelete(_id);
};
export default { findAll, create, update, deleteBlog };
