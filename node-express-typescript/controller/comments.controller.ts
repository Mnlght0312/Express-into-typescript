// comments.controller.ts

import { Request, Response } from "express";
import Comment from "../model/movie.model";
import CommentDto from "../dtos/comment.dto";

const create = async (req: Request, res: Response) => {
  try {
    const commentDto: CommentDto = req.body;
    const comment = new Comment(commentDto);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the comment" });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving comments" });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const commentDto: CommentDto = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(id, commentDto, { new: true });
    if (!updatedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the comment" });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deletedComment = await Comment.findByIdAndDelete(id);
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
