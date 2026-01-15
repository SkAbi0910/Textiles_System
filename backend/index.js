import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


connectDB();

connectCloudinary();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
 {
     origin: "http://localhost:5173",
        credentials: true,
    }
));

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/", (req, res) => {
    res.send("Api successfully running");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
