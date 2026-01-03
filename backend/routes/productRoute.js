import express from "express";
import { addProduct, changeStock, deleteProduct } from "../controllers/productController";
import { authAdmin } from "../middleware/authAdmin.js";
import { upload } from "../middleware/multer.js";

const productRouter = express.Router();


productRouter.post('/add',upload.array('images'),authAdmin,addProduct);
productRouter.get('/list',authAdmin,addProduct);
productRouter.get('/single',authAdmin,addProduct);
productRouter.put('/stock',authAdmin,changeStock);
productRouter.delete('/delete',authAdmin,deleteProduct);



export default productRouter;

