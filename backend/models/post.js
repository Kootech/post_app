import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);

export default postModel;
