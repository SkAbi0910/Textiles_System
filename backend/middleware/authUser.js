import jwt from "jsonwebtoken";

export const authUser = (req, res, next) => {
    const token = req.cookies;

    if(!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded.id) {

            req.userId = decoded.id;
        }
        else{

            return res.status(401).json({ message: "Unauthorized access" });
        }
    }
    catch (err) {
        return res.status(401).json({ message:err.message });
    }
}
    