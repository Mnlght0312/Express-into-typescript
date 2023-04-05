"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionsSchema = new mongoose_1.Schema({});
const Session = (0, mongoose_1.model)("movies", sessionsSchema);
exports.default = Session;
