"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const theatersSchema = new mongoose_1.Schema({});
const Theaters = (0, mongoose_1.model)("Theaters", theatersSchema);
exports.default = Theaters;
