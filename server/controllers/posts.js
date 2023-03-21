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
    const apiUrl = `https://gogoanime.consumet.stream/search?keyw=${animeTitle}` || "";

    const response = await fetch(apiUrl);
    const json = await response.json();
    const animeImg = json.animeImg;

    // console.log(apiUrl);
    // console.log(animeImg);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
  // create the new Post document with animeImg
  try {
    const newPost = await Post.create({
      userID: User.userID,
      title: title,
      animeImg: "none",
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
    const decodedToken = jwt.verify(req.token, TOKEN_KEY);
    const username = await User.findById(decodedToken.username);
    const title = req.params.title
    const post = await Post.findOneAndUpdate({ username: username.username, title: title }, { $set: req.body },
      { new: true })
    res.status(201).json(post)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const DeletePost = async (req, res) => {

  try {
    const decodedToken = jwt.verify(req.token, TOKEN_KEY);
    const user = await User.findById(decodedToken.username);
    const post = await Post.findOneAndDelete({ title: req.params.title, username: user.username });
    if (!post) {
      return res.status(404).json({ message: 'よかった もう一度やってみる' });
    }
    res.json({ message: '死にたくない' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }

}


