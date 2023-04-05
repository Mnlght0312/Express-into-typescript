import express from "express";
import { create, getAll, update, remove } from "../controller/users.controller";

const router = express.Router();

// Create a new user
router.post("/", create);

// Get all users
router.get("/", getAll);

// Update a user by id
router.put("/:id", update);

// Remove a user by id
router.delete("/:id", remove);

export default router;
