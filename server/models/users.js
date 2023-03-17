import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  posts: [{
    ref: 'Post',
    type: mongoose.Schema.Types.ObjectId,
  }]
})

export default mongoose.model('User', userSchema)
