import UserAuth from "../Models/UserAuth.model.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET_JWT_KEY);
      console.log(decode);
      req.user = await UserAuth.findById(decode.id).select("password");
      next();
    } catch (error) {
      return res.status(401).json({ error: "Not Autherized ,Wrong Token" });
    }

    if (!token) {
      return res.status(401).send("No Token Found");
    }
  }
};
