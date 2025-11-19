import { verifyToken } from "../utils/jwt.js";

const authenticate = (req, res, next) => {
  try {
    const { payload } = req.cookies;
    if (!payload) {
      throw new Error("User not logged");
    }
    const decoded = verifyToken(payload); // { data, iat, exp }

    if (!decoded || !decoded.data) {
      throw new Error("Invalid token");
    }
    req.user = decoded.data;
    next(); // va al controlador

  } catch (error) {
    res.status(401).send({
      success: false,
      message: error.message,
    });
  }
};

export default authenticate;
