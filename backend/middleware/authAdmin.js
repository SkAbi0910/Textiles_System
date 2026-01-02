import jwt from "jsonwebtoken";

export const authAdmin = (req, res, next) => {
    const {adminToken }= req.cookies;

    if(!adminToken) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    try {
        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);
        if (decoded.email===process.env.ADMIN_EMAIL) {

           next();
        }
        else{

            return res.status(401).json({ message: "Unauthorized access" });
        }
    }
    catch (err) {
        return res.status(401).json({ message:err.message });
    }
}
    