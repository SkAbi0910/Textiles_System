import axios from "axios";

export const adminLogin = async ({ email, password }) => {
  const { data } = await axios.post("http://localhost:5000/dashboard", { email, password }
    , {
      withCredentials: true
    }
  );
  return data;
};

