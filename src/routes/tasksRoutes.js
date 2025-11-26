import { Router } from "express";
import { taskController } from "../container/container.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();

router.post("/", authenticate, taskController.create);
router.get("/", authenticate, taskController.getAll);
router.get("/:id", authenticate, taskController.getOne);
router.put("/:id", authenticate, taskController.update);
router.delete("/:id", authenticate, taskController.delete);

export default router;
