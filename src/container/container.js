import UserController from "../controllers/UserController.js";
import UserService from "../services/UserService.js";
import { User, Role } from "../models/index.js";

// Inyección de dependencias
const userService = new UserService(User, Role);
const userController = new UserController(userService);

export default userController;
