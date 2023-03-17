import mongoose from "mongoose";

// import { userSchema } from "./users.js";

const postSchema = new mongoose.Schema({
  username: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  title: { type: mongoose.Schema.Types.String, ref: "Anime" },
  poster: { type: mongoose.Schema.Types.String, ref: "Anime" },
  rating: {
    type: "number",
    "minimum": 0,
    "maximum": 5
  },
  comment: String,
  date: Date,
})

export default mongoose.model('Post', postSchema)
