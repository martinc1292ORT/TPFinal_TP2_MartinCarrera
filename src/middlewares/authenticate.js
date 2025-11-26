import { verifyToken } from "../utils/jwt.js";

const authenticate = (req, res, next) => {
  try {
    const { payload } = req.cookies;
    if (!payload) {
      throw new Error("Usuario no logueado");
    }
    const decoded = verifyToken(payload);

    if (!decoded || !decoded.data) {
      throw new Error("Token invalido");
    }
    req.user = decoded.data;
    next();

  } catch (error) {
    res.status(401).send({
      success: false,
      message: error.message,
    });
  }
};

export default authenticate;
