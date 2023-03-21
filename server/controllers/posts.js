import fetch from 'node-fetch';
import Post from '../models/posts.js'
import User from '../models/users.js'
import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.TOKEN_KEY

export async function GetPosts(req, res) {
  try {
    const posts = await Post.find().populate('userID')
    return res.json(posts)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function GetPostByUser(req, res) {
  try {
    const username = req.params.username
    console.log(username);
    const post = await Post.findOne(username).populate('username')
    return res.json(post)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
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
  const { title, rating, comment } = req.body;

  try {
    // fetch the animeImg using the animeTitle
    const animeTitle = title;
    const apiUrl = `https://gogoanime.consumet.stream/search?keyw=${animeTitle}`;

    const response = await fetch(apiUrl);
    const json = await response.json();
    const animeImg = json.animeImg;

    console.log(apiUrl);
    console.log(animeImg);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
  // create the new Post document with animeImg
  try {
    const newPost = await Post.create({
      userID: User.userID,
      title: title,
      animeImg: animeImg,
      rating: rating,
      comment: comment,
      date: Date.now(),
    });

    User.posts.push(newPost._id)
    User.save()


    res.status(201).json(newPost, userPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'NANI?!' });
  }
};

// These are place holders The only things that are right as of now are the Names lmao
export const UpdatePost = async (req, res) => {
  try {
    const username = req.params.username
    const post = await Post.findOneAndUpdate({ username: username }, { $set: req.body },
      { new: true })
    res.status(201).json(post)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const DeletePost = async (req, res) => {

  try {
    const username = req.params.username
    const deleted = await Post.findOneAndDelete({ username: username })


    if (deleted) {
      return res.status(200).send('死にたくない')
    }

    throw new Error('よかった もう一度やってみる')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

