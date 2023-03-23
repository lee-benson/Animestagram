import 'dotenv/config'
import './connection.js'

import User from '../models/users.js'
import Post from '../models/posts.js'

import mongoose from 'mongoose'

// await User.deleteMany()
await Post.deleteMany()

const myself = new User({
  username: "test2"
})

console.log(myself)


await Post.insertMany([{
  comment: "I love you Handler One",
  date: new Date(),
  userID: myself.id,
  title: "86",
  img: "https://gogocdn.net/cover/86.png",
  rating: 5,
},
{
  comment: "TLDW",
  date: new Date(),
  userID: myself.id,
  title: "One Piece",
  img: "https://gogocdn.net/images/anime/One-piece.jpg",
  rating: 1,
},
{
  comment: "Honestly the GOAT, can't be beat",
  date: new Date(),
  userID: myself.id,
  title: "Yu Yu Hakusho",
  img: "https://gogocdn.net/images/anime/Y/yu-yu-hakusho.jpg",
  rating: 5,
},
{
  comment: "It's basically Code Geauss, Home boy pretends to be a threat to the world in an attempt to save it, seems cool",
  date: new Date(),
  userID: myself.id,
  title: "Attack on Titan",
  img: "https://gogocdn.net/images/anime/Shingeki-no-Kyojin.jpg",
  rating: 4,
}
]).then((posts) => {
  myself.posts = posts.map(post => post._id)
  myself.save()
})




