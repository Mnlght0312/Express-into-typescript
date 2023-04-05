"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const theaters_controller_1 = require("../controller/theaters.controller");
const router = express_1.default.Router();
// Create a new theater
router.post("/the", theaters_controller_1.create);
// Get all theaters
router.get("/the", theaters_controller_1.getAll);
// Update a theater by id
router.put("/the/:id", theaters_controller_1.update);
// Remove a theater by id
router.delete("/the/:id", theaters_controller_1.remove);
exports.default = router;
