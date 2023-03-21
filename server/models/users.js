import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }]

})

export default mongoose.model('User', userSchema)
