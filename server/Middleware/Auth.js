import UserAuth from "../Models/UserAuth.model.js";
import jwt from "jsonwebtoken";

// export const verifyToken = async (req, res, next) => {
//   try {
//     let token = req.header("Authorization");

//     if (!token) {
//       res.status(401).json({ message: "Access Denied" });
//     }
//     if (token.startsWith("Bearer ")) {
//       token = token.slice(7, token.length).trimLeft();
//     }
//     const verified = jwt.verify(token, process.env.SECRET_JWT_KEY);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(501).json({ error: error.message });
//   }
// };

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
