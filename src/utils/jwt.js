import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";


export const generateToken = (data) => {
  const token = jwt.sign({ data }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

export const verifyToken = (token) => {
  const user = jwt.verify(token, JWT_SECRET);
  return user;  
};
