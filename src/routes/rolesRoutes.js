import { Router } from "express";
import { roleController } from "../container/container.js";
import authenticate from "../middlewares/authenticate.js";
import isAdmin from "../middlewares/isAdmin.js";

const rolesRoutes = Router();

rolesRoutes.get("/me", authenticate, roleController.getMyRole);

rolesRoutes.get("/", authenticate, isAdmin, roleController.getAll);
rolesRoutes.get("/:id", authenticate, isAdmin, roleController.getOne);
rolesRoutes.post("/", authenticate, isAdmin, roleController.create);
rolesRoutes.put("/:id", authenticate, isAdmin, roleController.update);
rolesRoutes.delete("/:id", authenticate, isAdmin, roleController.delete);

export default rolesRoutes;
