import express from "express";
import { getMyProfile, login, logout, newUser } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", newUser);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;
