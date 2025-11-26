import { Router } from "express";
import { userController } from "../container/container.js";
import authenticate from "../middlewares/authenticate.js";
import isAdmin from "../middlewares/isAdmin.js";

const usersRoutes = Router();

usersRoutes.get("/me", authenticate, userController.me);
usersRoutes.post("/", userController.createUser);
usersRoutes.post("/login", userController.login);
usersRoutes.get("/", authenticate, isAdmin, userController.getAllUsers);

export default usersRoutes;
