"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessions_controller_1 = require("../controller/sessions.controller");
const router = express_1.default.Router();
// Create a new session
router.post("/", sessions_controller_1.create);
// Get all sessions
router.get("/", sessions_controller_1.getAll);
// Update a session by id
router.put("/:id", sessions_controller_1.update);
// Remove a session by id
router.delete("/:id", sessions_controller_1.remove);
exports.default = router;
