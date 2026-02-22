import axios from "axios";

export const adminLogin = async ({ email, password }) => {
  const { data } = await axios.post(
    "http://localhost:5000/admin/login",
    { email, password },
    { withCredentials: true }
  );
  return data;
};


