// movie.controller.ts

import { Request, Response } from "express";
import Movie from "../model/movie.model";
import MovieDto from "../dtos/movie.dto";

const create = async (req: Request, res: Response) => {
  try {
    const movieDto: MovieDto = req.body;
    const movie = new Movie(movieDto);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the movie" });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find({}).limit(5);
    res.json({status : true , result : movies});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving movies" });
  }
};

const update = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
   
    const movieDto: MovieDto = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(id, movieDto, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the movie" });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deletedMovie= await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(deletedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the movie" });
  }
};

export { create, getAll, update, remove };
