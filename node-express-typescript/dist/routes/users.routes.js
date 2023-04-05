"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controller/users.controller");
const router = express_1.default.Router();
// Create a new user
router.post("/", users_controller_1.create);
// Get all users
router.get("/", users_controller_1.getAll);
// Update a user by id
router.put("/:id", users_controller_1.update);
// Remove a user by id
router.delete("/:id", users_controller_1.remove);
exports.default = router;
