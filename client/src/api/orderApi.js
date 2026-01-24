import axios from "axios";

export const fetchOrders = async () => {
  const { data } = await axios.get("/api/orders"); 
  return data;
};
