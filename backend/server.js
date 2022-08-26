import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";

import connectDB from "./config_db.js";
import postRouter from "./routers/post.js";

const PORT = process.env.PORT || 8080;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/post", postRouter);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
