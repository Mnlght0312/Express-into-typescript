import { Schema, model, Types } from "mongoose";

// interface IMovie {
//   title: string;
//   rating: number;
//   directors: string[];
// }

interface Itheaters {
  _id: { type: String; required: true };
  theaterId: { type: Number; required: true };
  location: { type: Object; required: true };
  // genre: { type: Types.ObjectId; ref: "" };
}

const theatersSchema = new Schema<Itheaters>({});

const Theaters = model<Itheaters>("Theaters", theatersSchema);

export default Theaters;
