import express from "express";
import { getUsers, getUser, loginUser, getUserProfile, registerUser } from "../controllers/usersController";
import { protect } from "../middleware/authMiddleware";

const userRouter = express.Router();
// @ PRIVATE
// @ /api/users/profile
userRouter.route("/profile").get(protect, getUserProfile);
// /api/users
// public
userRouter.route("/").get(protect, getUsers);

// /api/users/:id
userRouter.route("/:id").get(getUser);

// LOGIN USER
// @ /api/users/login
userRouter.route("/login").post(loginUser);

// REGISTER USER
// @ /api/users/register
userRouter.route("/register").post(registerUser);

export default userRouter;
