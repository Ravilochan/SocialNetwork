const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
    default: "No photo",
  },
  postedBy: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  likes: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      text: String,
      postedBy: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
});

mongoose.model("Post", postSchema);
