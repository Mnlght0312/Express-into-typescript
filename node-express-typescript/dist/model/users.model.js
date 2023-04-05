"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({});
const Users = (0, mongoose_1.model)("movies", usersSchema);
exports.default = Users;
