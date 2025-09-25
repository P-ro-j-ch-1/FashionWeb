// src/routes/index.js
import { Router } from "express";
import { health } from "../controllers/health.controller.js";
import { listUsers } from "../controllers/user.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Backend is running. Try /health or /users");
});

router.get("/health", health);
router.get("/users", listUsers);

export default router;
