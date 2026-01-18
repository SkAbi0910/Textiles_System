import express from "express";
import { authAdmin } from "../middleware/authAdmin.js";
import { allOrders, placeOrderStripe, updateStatus, userOrders } from "../controllers/orderConroller.js";
import { authUser } from "../middleware/authUser.js";

const orderRouter = express.Router();

orderRouter.post("/list",authAdmin,allOrders);
orderRouter.post("/status",authAdmin,updateStatus);
orderRouter.post("/cod",authUser,placeOrderStripe);

orderRouter.post("/userorders",authUser,userOrders);
export default orderRouter;