import jwt from "jsonwebtoken";
import { User } from "../models/user";
import asyncHandler from "express-async-handler";



export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.PASSWORD_SECRET);
      //@ts-ignore
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("No authorization, token is missing");
    next();
  }
});
