import express from "express";
import { create, getAll, update, remove } from "../controller/theaters.controller";

const router = express.Router();

// Create a new theater
router.post("/the", create);

// Get all theaters
router.get("/the", getAll);

// Update a theater by id
router.put("/the/:id", update);

// Remove a theater by id
router.delete("/the/:id", remove);

export default router;
