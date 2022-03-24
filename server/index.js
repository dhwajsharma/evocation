import express from "express";
const app = express();
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

app.use("/posts", postRoutes);

dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

// middleware
app.use(express.json());
app.use(cors());
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
