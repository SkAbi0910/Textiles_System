import axios from "axios";

export const fetchBlogs = async () => {
  const { data } = await axios.get("/api/blogs");
  return data;
};
