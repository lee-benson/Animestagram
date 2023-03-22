import mongoose from "mongoose";

// import { userSchema } from "./users.js";

const postSchema = new mongoose.Schema({
  userID: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  title: String,
  img: String,
  rating: {
    type: Number,
    minimum: 0,
    maximum: 5
  },
  comment: String,
  date: Date,
})

export default mongoose.model('Post', postSchema)
