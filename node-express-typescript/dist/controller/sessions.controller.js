"use strict";
// sessions.controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getAll = exports.create = void 0;
const movie_model_1 = __importDefault(require("../model/movie.model"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sessionsDto = req.body;
        const sessions = new movie_model_1.default(sessionsDto);
        yield sessions.save();
        res.status(201).json(sessions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the session" });
    }
});
exports.create = create;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sessions = yield movie_model_1.default.find();
        res.json(sessions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving sessions" });
    }
});
exports.getAll = getAll;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const sessionsDto = req.body;
        const updatedSession = yield movie_model_1.default.findByIdAndUpdate(id, sessionsDto, { new: true });
        if (!updatedSession) {
            return res.status(404).json({ error: "Session not found" });
        }
        res.json(updatedSession);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the comment" });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedComment = yield movie_model_1.default.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(deletedComment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the comment" });
    }
});
exports.remove = remove;
