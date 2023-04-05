"use strict";
// movie.controller.ts
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
        const movieDto = req.body;
        const movie = new movie_model_1.default(movieDto);
        yield movie.save();
        res.status(201).json(movie);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the movie" });
    }
});
exports.create = create;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movie_model_1.default.find({}).limit(30);
        res.json({ status: true, result: movies });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving movies" });
    }
});
exports.getAll = getAll;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const movieDto = req.body;
        const updatedMovie = yield movie_model_1.default.findByIdAndUpdate(id, movieDto, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.json(updatedMovie);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the movie" });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedMovie = yield movie_model_1.default.findByIdAndDelete(id);
        if (!deletedMovie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.json(deletedMovie);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the movie" });
    }
});
exports.remove = remove;
