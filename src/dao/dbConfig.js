// ? Mongoose
import mongoose from "mongoose";
import config from "../config/config.js";

try {
  mongoose.connect(config.mongoUrl);
  console.log(`Base de datos conectada`);
} catch (error) {
  console.log(error.message);
}
