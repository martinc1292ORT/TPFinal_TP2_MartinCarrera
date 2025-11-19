import { Router } from "express";
import usersRoutes from "./usersRoutes.js";
import rolesRoutes from "./rolesRoutes.js";

const router = Router();

router.use("/users", usersRoutes);
router.use("/roles", rolesRoutes);

export default router;
