import { Router } from "express";
import userController from "../container/container.js";
import authenticate from "../middlewares/authenticate.js";

const usersRoutes = Router();

// Ver mis datos
usersRoutes.get("/me", authenticate, userController.me);
// Crear usuario
usersRoutes.post("/", userController.createUser);
// Login
usersRoutes.post("/login", userController.login);
// Trae todos los usuarios
usersRoutes.get("/", authenticate, userController.getAllUsers);

export default usersRoutes;
