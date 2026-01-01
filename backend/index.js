import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
 {
     origin: "http://localhost:5173",
        credentials: true,
    }
));

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send("Api successfully running");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
