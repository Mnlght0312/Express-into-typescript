"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentsSchema = new mongoose_1.Schema({});
const Comments = (0, mongoose_1.model)("movies", commentsSchema);
exports.default = Comments;
