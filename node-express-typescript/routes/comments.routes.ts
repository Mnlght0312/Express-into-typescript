import express from "express";
import { create, getAll, update, remove } from "../controller/comments.controller";

const router = express.Router();

// Create a new comment
router.post("/", create);

// Get all comments
router.get("/", getAll);

// Update a comment by id
router.put("/:id", update);

// Remove a comment by id
router.delete("/:id", remove);

export default router;
