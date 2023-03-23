import React, { useState } from "react";
import { createPost } from "../../api/posts";
import './NewPost.css'

function PostForm() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState({});
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(title, rating, comment);

    //search db with user


    createPost({
      title,
      rating,
      comment,
    })

  };

  return (
    <div className="profileDiv">
      <form
        onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className="newPostInput"
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          className="newPostInput"
          type="number"
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          className="newPostText"
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button
          className="newPostButton"
          type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
