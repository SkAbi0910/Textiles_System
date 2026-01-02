import express from 'express';
import { isAuth, userLogin, userLogout, userRegister } from '../controllers/userController.js';
import { authUser } from '../middleware/authUser.js';

const userRouter = express.Router();


userRouter.post('/register',userRegister);
userRouter.post('/login',userLogin);
userRouter.post('/logout',userLogout);
userRouter.post('/is-auth',authUser,isAuth);


export default userRouter;