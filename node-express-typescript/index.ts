import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRoute from "./routes/movie.routes";
import cors from "cors";
import commentsRoute from "./routes/comments.routes";
import theatersRoute from "./routes/theaters.routes";
import sessionsRoute from "./routes/sessions.routes";
import usersRoute from "./routes/users.routes";



dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

const uri: string = process.env.MONGO_DB_URI || "";

mongoose
    .connect(uri)
    .then(() => console.log("DB Success"))
    .catch((err) => console.log(err));


app.use("/api", movieRoute);
app.use("/api", commentsRoute);
app.use("/api", theatersRoute);
// app.use("/api", sessionsRoute);
// app.use("/api", usersRoute);



app.get("/api", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});