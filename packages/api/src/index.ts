import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/productRoutes";
import usersRouter from "./routes/userRoutes";
import ossProductRouter from "./routes/oss/ossProductRoutes";
import db from "./db/db";
import cors from "cors";
import path from "path";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

// Initiate dotenv
dotenv.config();

// Connect to DB
db();

const app = express();
app.use(cors());

// for body parser
app.use(express.json());

// routers
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/oss/products", ossProductRouter);
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads ")));

app.get("/", (req, res) => {
  res.json({ hello: "The sedulous hyena ate the antelope!" });
});

// *********** ERR HANDLERS*****************
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
// @ts-ignore
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log(`mode : ${process.env.NODE_ENV}`);
  return console.log(`server is listening on ${port}`);
});
