// movie.router.ts

import express from "express";
import { create, getAll, update, remove } from "../controller/movie.controller";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
