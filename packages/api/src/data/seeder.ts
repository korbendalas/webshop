import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { users } from "./users";
import { productsSeed, brandSeed } from "./products";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Order } from "../models/order";
import { Brands } from "../models/brands";
import { Categories } from "../models/categories";
import db from "../db/db";
const categories = ["Laptops", "Printers"];
dotenv.config();

export const importData = async () => {
  try {
    db();

    await Order.deleteMany();

    await Product.deleteMany();

    await User.deleteMany();

    await Brands.deleteMany();

    // @ts-ignore
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    // @ts-ignore
    const createdBrands = await Brands.insertMany(brandSeed);
    console.log("created Brands", createdBrands);

    const sampleProducts = await productsSeed.map(product => {
      return {
        ...product,
        user: adminUser,
        brand: createdBrands[0]._id,
      };
    });

    // @ts-ignore
    const createdProducts = await Product.insertMany(sampleProducts);

    console.log("createdProducts", createdProducts);

    console.log("Data Imported!");

    process.exit();
  } catch (error) {
    console.error(`${error.message}`);
    process.exit(1);
  }
};

export const destroyData = async () => {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
