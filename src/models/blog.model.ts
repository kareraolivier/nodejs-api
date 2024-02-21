import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  image: string;
  description: string;
}

const blogSchema: Schema = new Schema(
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

// You can add pre-save or pre-update hooks here if needed
// blogSchema.pre('save', function (next) {
//   // Perform any necessary actions before saving the blog
//   next();
// });

// Export the model
export default mongoose.model<IBlog>("Blog", blogSchema);
