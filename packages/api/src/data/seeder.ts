import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { users } from "./users";
import { products } from "./products";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Order } from "../models/order";
import { Categories } from "../models/categories";
import db from "../db/db";
const categories = ["Laptops", "Printers"];

dotenv.config();

db();

export const importData = async () => {
  try {
    // @ts-ignore
    await Order.deleteMany();
    // @ts-ignore
    await Product.deleteMany();
    // @ts-ignore
    await User.deleteMany();
    await Categories;

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    process.exit();
    console.log("Data Imported!".green);
  } catch (error) {
    console.error(`${error.message}`.red);
    process.exit(1);
  }
};

export const destroyData = async () => {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    console.log("Data Destroyed!".red);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
};

importData();
