import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";


export const userRegister =async (req, res) => {
   
    try{

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    if(password.length<8){
        return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name: username,
        email,
        password: hashedPassword,
    });
    await newUser.save();
    

const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, secure: process.env.APP_ENV === "production", sameSite: process.env.APP_ENV === "production" ? "none" : "strict",maxAge: 3600000 });
    return res.status(201).json({ message: "User registered successfully" , token,user:newUser});
    
    }catch(err){

        return res.status(500).json({ message: "Server Error" });
    }
}

export const userLogin = async(req,res)=>{

    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid password"});
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.cookie("token", token, { httpOnly: true, secure: process.env.APP_ENV === "production", sameSite: process.env.APP_ENV === "production" ? "none" : "strict",maxAge: 3600000 });
        return res.status(200).json({ message: "Login successful", token, user });

    }catch(err){

        return res.status(500).json({ message: "Server Error" });
    }
}


export const isAuth = async(req,res)=>{

    try{
        const {userId} = req;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json({user});

    }
    
    catch(err){


        return res.status(500).json({ message: "Server Error" });
    }

}


export const userLogout = async(req,res)=>{

    try{
        res.clearCookie("token", { httpOnly: true, secure: process.env.APP_ENV === "production", sameSite: process.env.APP_ENV === "production" ? "none" : "strict" });
        return res.status(200).json({ message: "Logout successful" });
    }
    catch(err){
        return res.status(500).json({ message: "Server Error" });
    }
}