import { Router } from "express";

const rolesRoutes = Router();

// GET 
rolesRoutes.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "get all roles (placeholder)" });
});

// GET 
rolesRoutes.get("/:id", (req, res) => {
  res.status(200).send({ success: true, message: "get role by id (placeholder)" });
});

// POST 
rolesRoutes.post("/", (req, res) => {
  res.status(200).send({ success: true, message: "create role (placeholder)" });
});

// PUT 
rolesRoutes.put("/:id", (req, res) => {
  res.status(200).send({ success: true, message: "update role (placeholder)" });
});

// DELETE 
rolesRoutes.delete("/:id", (req, res) => {
  res.status(200).send({ success: true, message: "delete role (placeholder)" });
});

export default rolesRoutes;
