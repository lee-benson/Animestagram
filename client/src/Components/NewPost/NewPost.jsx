import React, { useState } from "react";
import { createPost } from "../../api/posts";

function PostForm() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState({});
  const [comment, setComment] = useState("");
  // const [userID, setUserID] = useState("")

  // setUserID(async (username) => {
  //   const res = await fetch(`http://localhost:8080/api/user/${username}`)
  //   const data = await res.json();
  //   if (data.length > 0) {
  //     return data[0]._id;
  //   } else {
  //     throw new Error('User not found');
  //   }
  // });

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
    <div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
