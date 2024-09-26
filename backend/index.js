import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import dotenv from "dotenv";
import api from "./routes/index.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(api);

app.listen(5000, () => console.log("Server running on port 5000"));
