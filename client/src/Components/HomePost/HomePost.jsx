// import React, { useEffect, useState } from "react";

// // The below divs will have info pulled from an api, the divs specfically in mind are username, title, and rating.

// export default function HomePost() {
//   const [post, setPost] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);

//   const res = await fetch()

//   return (
//     <div className="homePosts">
//       <div className="homePostsTrio">
//         <div className="username"></div>
//         <div className="title"></div>
//         <div className="rating"></div>
//       </div>
//       <div className="image"></div>
//       <div className="review"></div>
//       <div className="comments"></div>
//     </div>
//   )
// }



import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx"
import { getPosts } from "../../api/posts.js";
// export default function HomePost() {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchPosts = async (page) => {
//     try {
//       setLoading(true);
//       const newPosts = await getPosts(page);
//       setPosts([...posts, ...newPosts]);
//       setCurrentPage(page + 1);
//       setLoading(false);
//       if (newPosts.length === 0) {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(currentPage);
//   }, []);
//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       if (!loading && hasMore) {
//         fetchPosts(currentPage);
//       }
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const paginatedPosts = [];
//   for (let i = 0; i < posts.length; i += 3) {
//     paginatedPosts.push(posts.slice(i, i + 3));
//   }
//   return (
//     <div>
//       <Navbar />
//       {paginatedPosts.map((pagePosts) => (
//         <div className="page" key={pagePosts[0].id}>
//           {pagePosts.map((post) => (
//             <div className="homePosts" key={post.id}>
//               <div className="homePostsTrio">
//                 <div className="username">{post.username}</div>
//                 <div className="title">{post.title}</div>
//                 <div className="rating">{post.rating}</div>
//               </div>
//               <div className="image"><img src={post.image} alt={post.title} /></div>
//               <div className="review">{post.review}</div>
//               <div className="comments">{post.comments}</div>
//             </div>
//           ))}
//         </div>
//       ))}
//       {loading && <div className="loading">Loading...</div>}
//       {!hasMore && <div className="footer">End of page</div>}
//     </div>
//   );
// }

export default function HomePost() {
  return (
    <Navbar />
  )
}

