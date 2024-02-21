import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl: string = process.env.MONGO_URI as string;
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    throw new Error(`Error connecting to MongoDB: ${error}`);
  });

const port: string | number = process.env.PORT || 5000;
app.listen(port, () => console.log(`🔥 The app is running on ${port}`));
