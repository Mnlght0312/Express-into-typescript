// movie.router.ts

import express from "express";
import { create, getAll, update, remove } from "../controller/movie.controller";

const router = express.Router();

router.post("/movie", create);
router.get("/movie", getAll);
router.put("/movie/:id", update);
router.delete("/:id", remove);

export default router;
