import { Schema, model, Types } from "mongoose";

// interface IMovie {
//   title: string;
//   rating: number;
//   directors: string[];
// }

interface Iusers {
  _id: { type: String; required: true };
  name: { type: String; required: true };
  email: { type: String; required: true };
  password: {type: String; required: true}
  // genre: { type: Types.ObjectId; ref: "" };
}

const usersSchema = new Schema<Iusers>({});

const Users = model<Iusers>("movies", usersSchema);

export default Users;
