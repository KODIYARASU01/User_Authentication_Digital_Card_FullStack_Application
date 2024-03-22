import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      res.status(401).json({ message: "Access Denied" });
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.SECRET_JWT_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
