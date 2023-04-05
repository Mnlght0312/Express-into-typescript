import { Schema, model, Types } from "mongoose";

// interface IMovie {
//   title: string;
//   rating: number;
//   directors: string[];
// }

interface ISession {
  _id: { type: String; required: true };
  user_id: { type: String; required: true };
  jwt: { type: String; required: true };
  // genre: { type: Types.ObjectId; ref: "" };
}

const sessionsSchema = new Schema<ISession>({});

const Session = model<ISession>("movies", sessionsSchema);

export default Session;
