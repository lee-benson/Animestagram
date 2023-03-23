import React, { useState } from 'react';
// import axios from 'axios';
import { DeletePost } from '../../api/posts.js';



const UpDelForm = () => {
  const [title, setTitle] = useState('');
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');

  const handleDeletePost = () => {

    DeletePost(title)
  };

  // const handleUpdatePost = () => {


  //   axios.put(`http://localhost:8080/api/post/${title}`, { rating, comment })
  //     .then(response => {
  //       console.log(response);
  //       // handle successful update
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       // handle error
  //     });
  // };

  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title}
        onChange={e => setTitle(e.target.value)} />
      {/* <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" value={rating}
        onChange={e => setRating(e.target.value)} /> */}
      {/* <label htmlFor="comment">Comment:</label> */}
      {/* <textarea id="comment" value={comment}
        onChange={e => setComment(e.target.value)}></textarea> */}
      <button onClick={handleDeletePost}>Delete Post</button>
      {/* <button onClick={handleUpdatePost}>Update Post</button> */}
    </div>
  );
};

export default UpDelForm;
