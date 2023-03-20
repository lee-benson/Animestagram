import React, { useEffect, useState } from "react";

// The below divs will have info pulled from an api, the divs specfically in mind are username, title, and rating.

export default function HomePost() {
  const [post, setPost] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const res = await fetch()

  return (
    <div className="homePosts">
      <div className="homePostsTrio">
        <div className="username"></div>
        <div className="title"></div>
        <div className="rating"></div>
      </div>
      <div className="image"></div>
      <div className="review"></div>
      <div className="comments"></div>
    </div>
  )
}