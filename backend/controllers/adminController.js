import jwt from "jsonwebtoken";


export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

       
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });

            res.cookie("adminToken", token, { 
                httpOnly: true, 
                secure: process.env.APP_ENV === "production", 
                sameSite: process.env.APP_ENV === "production" ? "none" : "strict",
                maxAge: 3600000 
            });

            return res.status(200).json({ message: "Admin Login successful", token });
        } else {
            return res.status(401).json({ message: "Invalid admin credentials" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
}

export const isAdminAuth = async(req,res)=>{

    try{

        return res.status(200).json({success:true});
           
}
       
 catch(err){


        return res.status(500).json({ message: "Server Error" });
    }

}


export const adminLogout = async(req,res)=>{

    try{
        res.clearCookie("adminToken", { httpOnly: true, secure: process.env.APP_ENV === "production", sameSite: process.env.APP_ENV === "production" ? "none" : "strict" });
        return res.status(200).json({ message: "Logout successful" });
    }
    catch(err){
        return res.status(500).json({ message: "Server Error" });
    }
}