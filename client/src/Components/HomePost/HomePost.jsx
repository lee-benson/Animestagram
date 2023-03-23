import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { getPosts } from "../../api/posts.js";
import "./HomePost.css";

export default function HomePost() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const newPosts = await getPosts();
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      {posts.map((post) => (
        <div className="homePosts" key={post.id}>
          <div className="homePostsTrio">
            <div className="username">{post.userID.username}</div>
            <div className="title">{post.title}</div>
            <div className="rating">{post.rating}</div>
          </div>
          <div className="image">
            <img src={post.img} alt={post.title} />
          </div>
          <div className="comments">{post.comment}</div>
        </div>
      ))}
    </>
  )
}



