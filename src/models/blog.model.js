const mongoose = require("mongoose");

const blogModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
// // Add any pre-save or pre-update hooks here
// blogModel.pre("save", function (next) {
//   // Perform any necessary actions before saving the product
//   next();
// });

// Export the model
module.exports = mongoose.model("Blog", blogModel);
