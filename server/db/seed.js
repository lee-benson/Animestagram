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
  username: myself.id,
  poster: "86",
  title: "https://gogocdn.net/cover/86.png",
  rating: 5,
}])

// animeSchema.statics.findByKeyword = async function (keyword) {
//   const url = `https://gogoanime.consumet.stream/search?keyw=${keyword}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   const anime = new this({
//     title: data.animeTitle,
//     poster: data.animeImg
//   });
// }


await mongoose.disconnect()