import { Schema, model, Types } from "mongoose";

// interface IMovie {
//   title: string;
//   rating: number;
//   directors: string[];
// }

interface Icomments {
  _id: { type: String; required: true };
  name: { type: String; required: true };
  movie_id: { type: Object; required: true };
  text: { type: String; required: true};
  date: {type: Number; required:true}
  // genre: { type: Types.ObjectId; ref: "" };
}

const commentsSchema = new Schema<Icomments>({});

const Comments = model<Icomments>("movies", commentsSchema);

export default Comments;
