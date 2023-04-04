// sessions.controller.ts

import { Request, Response } from "express";
import Sessions  from "../model/movie.model";
import SessionsDto from "../dtos/sessions.dto";

const create = async (req: Request, res: Response) => {
  try {
    const sessionsDto = req.body;
    const sessions = new Sessions(sessionsDto);
    await sessions.save();
    res.status(201).json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the session" });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const sessions = await Sessions.find();
    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving sessions" });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const sessionsDto: SessionsDto = req.body;
    const updatedSession = await Sessions.findByIdAndUpdate(id, sessionsDto, { new: true });
    if (!updatedSession) {
      return res.status(404).json({ error: "Session not found" });
    }
    res.json(updatedSession);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the comment" });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deletedComment = await Sessions.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(deletedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the comment" });
  }
};

export { create, getAll, update, remove };
