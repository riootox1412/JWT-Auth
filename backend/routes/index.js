import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const api = express.Router();

api.get("/users", verifyToken, getUsers);
api.post("/users", Register);
api.post("/login", Login);
api.get("/token", refreshToken);
api.delete("/logout", Logout);

export default api;
