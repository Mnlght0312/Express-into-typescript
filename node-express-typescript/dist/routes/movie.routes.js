"use strict";
// movie.router.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../controller/movie.controller");
const router = express_1.default.Router();
router.post("/movie", movie_controller_1.create);
router.get("/movie", movie_controller_1.getAll);
router.put("/movie/:id", movie_controller_1.update);
router.delete("/:id", movie_controller_1.remove);
exports.default = router;
