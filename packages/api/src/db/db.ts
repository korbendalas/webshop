import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    return conn;
    console.log("MONGO CONNECTED:" + conn.connection.host);
  } catch (err) {
    console.error("MONGO ERR :" + err.message);
  }
};
export default connectDB;
