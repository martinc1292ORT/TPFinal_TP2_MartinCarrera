import { Router } from "express";
import usersRoutes from "./usersRoutes.js";
import rolesRoutes from "./rolesRoutes.js";
import tasksRoutes from "./tasksRoutes.js";


const router = Router();

router.use("/users", usersRoutes);
router.use("/roles", rolesRoutes);
router.use("/tasks", tasksRoutes);

export default router;
