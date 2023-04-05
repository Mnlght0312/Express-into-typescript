"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_controller_1 = require("../controller/comments.controller");
const router = express_1.default.Router();
// Create a new comment
router.post("/", comments_controller_1.create);
// Get all comments
router.get("/", comments_controller_1.getAll);
// Update a comment by id
router.put("/:id", comments_controller_1.update);
// Remove a comment by id
router.delete("/:id", comments_controller_1.remove);
exports.default = router;
