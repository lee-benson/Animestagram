// import React, { useEffect, useState } from "react";
import PostForm from "../../Components/NewPost/NewPost.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import UpDelForm from "../../Components/NewPost/UpDelPost.jsx";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <PostForm />
      <UpDelForm />
    </div>
  )
}