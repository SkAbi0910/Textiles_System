import axios from "axios";

export const registerUser = async (userData) => {
  const { data } = await axios.post("/api/auth/register", userData);
  return data;
};
