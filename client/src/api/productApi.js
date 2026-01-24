import axios from "axios";

export const fetchProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};
export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`/api/products/${id}`);
  return data;
};

export const updateProduct = async (id, updatedData) => {
  const { data } = await axios.put(`/api/products/${id}`, updatedData);
  return data;
};