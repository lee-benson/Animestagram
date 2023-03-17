import 'dotenv/config'
import './connection.js'

import User from '../models/users.js'
import Post from '../models/posts.js'

import mongoose from 'mongoose'

await User.deleteMany()
await Post.deleteMany()
const myself = await User.create({
  username: "Test",

})

await Post.insertMany([{
  comment: "I love you Handler One",
  date: new Date(),
  userID: myself.id,
  title: "86",
  poster: "https://gogocdn.net/cover/86.png",
  rating: 5,
}])
await Post.insertMany([{
  comment: "TLDW",
  date: new Date(),
  userID: myself.id,
  title: "One Piece",
  poster: "https://gogocdn.net/images/anime/One-piece.jpg",
  rating: 1,
}])




await mongoose.disconnect()