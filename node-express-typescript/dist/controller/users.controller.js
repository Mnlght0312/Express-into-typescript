"use strict";
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
exports.update = exports.remove = exports.getAll = exports.create = void 0;
const users_model_1 = __importDefault(require("../model/users.model"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.default.create(req.body);
    res.json({ status: true, result });
});
exports.create = create;
const getAll = (req, res) => {
    res.json({ status: true });
};
exports.getAll = getAll;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const Users = req.body;
        const updatedUsers = yield Users.findByIdAndUpdate(id, { new: true });
        if (!updatedUsers) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(updatedUsers);
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
        const deletedUsers = yield users_model_1.default.findByIdAndDelete(id);
        if (!deletedUsers) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(deletedUsers);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the comment" });
    }
});
exports.remove = remove;
