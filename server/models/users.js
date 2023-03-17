import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,

})

export default mongoose.model('User', userSchema)
