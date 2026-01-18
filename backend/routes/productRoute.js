import express from "express";
import { addProduct, changeStock, deleteProduct, listCategories, listProduct, singleProduct } from "../controllers/productController.js";
import { authAdmin } from "../middleware/authAdmin.js";
import { upload } from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.get('/categories', listCategories);
productRouter.post('/add',upload.array('images'),authAdmin,addProduct);
productRouter.get('/list',listProduct);
productRouter.get('/single/:id',singleProduct);
productRouter.put('/stock',authAdmin,changeStock);
productRouter.delete('/delete',authAdmin,deleteProduct);



export default productRouter;

