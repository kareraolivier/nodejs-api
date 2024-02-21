const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoo_url = process.env.MONGO_URI;
mongoose
  .connect(mongoo_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    throw new Error("Error connecting to MongoDB:", error);
  });

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`🔥 The app is running on ${port}`));
