import Users from "../model/users.model";
import { Request, Response } from "express";


const create = async (req: Request, res: Response) => {

    const result = await Users.create(req.body);

    res.json({ status: true, result });
};

const getAll = (req: Request, res: Response) => {
    res.json({ status: true });
};
const update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const Users = req.body;
      const updatedUsers = await Users.findByIdAndUpdate(id, { new: true });
      if (!updatedUsers) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.json(updatedUsers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while updating the comment" });
    }
  };
  
  const remove = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const deletedUsers = await Users.findByIdAndDelete(id);
      if (!deletedUsers) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.json(deletedUsers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while deleting the comment" });
    }
  };

export { create, getAll, remove, update };
