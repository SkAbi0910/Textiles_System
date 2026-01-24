import axios from "axios";

export const adminLogin = async ({ email, password }) => {
    const email1 = "admin@example.com";
  const pwd = "123456";
  const { data } = await axios.post("/api/admin/login", {
    email1,
    pwd,
  });

  return data; 
};
