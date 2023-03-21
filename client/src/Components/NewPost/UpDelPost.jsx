import React, { useState } from 'react';
import axios from 'axios';



const UpDelForm = () => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');

  const handleDeletePost = () => {
    axios.delete(`http://localhost:8080/api/post/${title}/`)
      .then(response => {
        console.log(response);
        // handle successful deletion
      })
      .catch(error => {
        console.log(error);
        // handle error
      });
  };

  const handleUpdatePost = () => {


    axios.put(`http://localhost:8080/api/post/${title}`, { rating, comment })
      .then(response => {
        console.log(response);
        // handle successful update
      })
      .catch(error => {
        console.log(error);
        // handle error
      });
  };

  return (
    <div>
      <label htmlFor="title">Title:</label>

      <input type="text" id="title" value={title}
        onChange={e => setTitle(e.target.value)} />
      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" value={rating}
        onChange={e => setRating(e.target.value)} />
      <label htmlFor="comment">Comment:</label>
      <textarea id="comment" value={comment}
        onChange={e => setComment(e.target.value)}></textarea>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username}
        onChange={e => setUsername(e.target.value)} />
      <button onClick={handleDeletePost}>Delete Post</button>
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
};

export default UpDelForm;
