import { Request, Response } from "express";
import Theaters from "../model/theaters.model";

const create = async (req: Request, res: Response) => {

    const result = await Theaters.create(req.body);

    res.json({ status: true, result });
};

const getAll = async (req: Request, res: Response) => {

    const result = await Theaters.find({}).limit(1);

    res.json({ status: true, result });
};
const update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const TheatersDto = req.body;
      const updatedTheaters = await Theaters.findByIdAndUpdate(id, TheatersDto, { new: true });
      if (!updatedTheaters) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.json(updatedTheaters);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while updating the comment" });
    }
  };
  
  const remove = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const deletedTheaters = await Theaters.findByIdAndDelete(id);
      if (!deletedTheaters) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.json(deletedTheaters);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while deleting the comment" });
    }
  };

export { create, getAll, update, remove };