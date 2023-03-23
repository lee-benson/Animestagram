import fetch from 'node-fetch';
import Post from '../models/posts.js'
import User from '../models/users.js'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';

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



export async function CreatePost(req, res,) {

  const { title, rating, comment } = req.body;
  const id = req.params.username
  console.log(id);
  try {
    // fetch the animeImg using the animeTitle

    const animeTitle = title;
    const apiUrl = `https://gogoanime.consumet.stream/search?keyw=${animeTitle}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    const img = data[0].animeImg;
    console.log(img)

    let id = req.id



    const user = await User.findById(id)
    console.log(user)
    const newPost = await Post.insertMany({
      userID: id,
      title,
      img: img,
      rating,
      comment,
      date: Date.now(),
    });

    user.posts.push(newPost._id)
    user.save()
    console.log(newPost)


    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
  }
};


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


export async function DeletePost(req, res) {
  const title = req.params.title;
  try {
    await Post.findOneAndDelete({ title: title });
    res.status(200).json({ message: "Post deleted successfully" });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}





