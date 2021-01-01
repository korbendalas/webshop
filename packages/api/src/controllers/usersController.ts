import asyncHandler from "express-async-handler";
import { Product } from "../models/products";
import { User, UserDoc } from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// @ GET ALL  USERS
// @ /api/users
// @ PUBLIC
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}); // empty object returns everything
  res.json(users);
});

// /api/users/:id
// public
export const getUser = asyncHandler(async (req, res) => {
  const user = await Product.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// @ REGISTER USER - POST
// @ /api/users/register
// @ PUBLIC

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, password2 } = req.body;

  const userExists = await User.findOne({ email }); // check if user exists
  // TODO validate registration fields
  if (!userExists) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashPassword });
    const token = jwt.sign({ id: user._id }, process.env.PASSWORD_SECRET, { expiresIn: "30d" });

    res.send({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token,
    });
  } else {
    res.status(400);
    throw new Error("User already exists");
  }
});

// @ LOGIN USER - POST
// @ /api/users/login
// @ PUBLIC

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    const comparePass = await bcrypt.compare(password, user.password);
    if (comparePass) {
      const token = jwt.sign({ id: user._id }, process.env.PASSWORD_SECRET, { expiresIn: "30d" });

      res.send({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        token,
      });
    } else {
      res.status(401);
      throw new Error("Wrong Password");
    }
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @ GET USER PROFILE - GET
// @ /api/users/profile
// @ PRIVATE

export const getUserProfile = asyncHandler(async (req, res) => {
  // @ts-ignore
  const user = await User.findById(req.user._id);

  if (user) {
    const token = jwt.sign({ id: user._id }, process.env.PASSWORD_SECRET, { expiresIn: "30d" });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});
