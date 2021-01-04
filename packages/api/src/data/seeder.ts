import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import { users } from "./users";
import { productsSeed } from "./products";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Order } from "../models/order";
import { OnSale } from "../models/onSale";
import { Categories } from "../models/categories";
import db from "../db/db";
const categories = ["Laptops", "Printers"];
import faker from "faker";

dotenv.config();

export const importData = async () => {
  try {
    db();

    await Order.deleteMany();

    await Product.deleteMany();

    await User.deleteMany();

    await OnSale.deleteMany();

    // @ts-ignore
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = productsSeed.map(product => {
      return { ...product, user: adminUser };
    });
    // @ts-ignore
    const createdProducts = await Product.insertMany(sampleProducts);

    const onSale = createdProducts.slice(0, 20).map(item => {
      return { product: item._id, salePrice: Math.floor(Math.random() * 50) };
    });

    // @ts-ignore
    const onSaleProducts = await OnSale.insertMany(onSale);
    console.log("createdProducts", createdProducts);
    console.log("On sale products ", onSaleProducts);
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
