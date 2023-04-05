import express from "express";
import { create, getAll, update, remove } from "../controller/sessions.controller";

const router = express.Router();

// Create a new session
router.post("/", create);

// Get all sessions
router.get("/", getAll);

// Update a session by id
router.put("/:id", update);

// Remove a session by id
router.delete("/:id", remove);

export default router;
