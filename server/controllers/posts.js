import fetch from 'node-fetch';
import Post from '../models/posts.js'
import User from '../models/users.js'
import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.TOKEN_KEY

export async function GetPosts(req, res) {
  const posts = await Post.find().populate('userID')
  return res.json(posts)
}

export async function GetPostById(req, res) {
  const id = req.params.id
  console.log(id);
  const post = await Post.findById(id).populate('userID')
  return res.json(post)
}

// export async function CreatePost(req, res) {
//   const { comment } = req.body
//   // const user = await User.findOne({ handle: username })
//   const newPost = await Post.create({
//     username: req.id,
//     date: new Date(),
//     text: comment,
//   })
//   return res.json(newPost)
// }




export async function CreatePost(req, res) {
  // try {
  const { title, rating, comment } = req.body;

  // fetch the animeImg using the animeTitle
  const animeTitle = title;
  const apiUrl = `https://gogoanime.consumet.stream/search?keyw=${animeTitle}`;

  const response = await fetch(apiUrl);
  const json = await response.json();
  const animeImg = json.animeImg;

  console.log(apiUrl);
  console.log(animeImg);

  // create the new Post document with animeImg
  const newPost = await Post.create({
    userID: User.userID,
    title: title,
    animeImg: animeImg,
    rating: rating,
    comment: comment,
    date: Date.now(),
  });

  res.status(201).json(newPost);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: 'NANI?!' });
  // }
};

// These are place holders The only things that are right as of now are the Names lmao
export const UpdatePost = async (req, res) => {
  try {
    const title = req.params.title
    const songs = await Song.findOneAndUpdate({ title: title }, { $set: req.body },
      { new: true })
    res.status(201).json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const DeletePost = async (req, res) => {

  try {
    const title = req.params.title
    const deleted = await Song.findOneAndDelete({ title: title })


    if (deleted) {
      return res.status(200).send('The song has returned to the primordial ooze!')
    }

    throw new Error('Sorry Dave, I cannot find that song')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

