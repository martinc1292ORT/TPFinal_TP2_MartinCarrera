import { User, Role, Task } from "../models/index.js";

import UserService from "../services/UserService.js";
import TaskService from "../services/TaskService.js";
import RoleService from "../services/RoleService.js";

import UserController from "../controllers/UserController.js";
import TaskController from "../controllers/TaskController.js";
import RoleController from "../controllers/RoleController.js";


const userService = new UserService(User, Role);
const taskService = new TaskService(Task);
const roleService = new RoleService(Role);

const userController = new UserController(userService);
const taskController = new TaskController(taskService);
const roleController = new RoleController(roleService);

export {
  userService,
  taskService,
  roleService,
  userController,
  taskController,
  roleController,
};
