import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <h1 className="navHeader">
        <div className="websiteTitleBlock">
          <p className="websiteTitleWords">
            Animestagram
          </p>
        </div>
      </h1>
      <nav>
        {/* <div className="linkDiv"> */}

        <Link to="/post" className="linkFormat linkHome navLink click-shadow-drop click-shadow-drop--blue">Home</Link>
        <Link to="/profile" className="linkFormat linkProfile navLink click-shadow-drop click-shadow-drop--blue">Profile</Link>
        <Link to="/" className="linkFormat linkSignOut navLink click-shadow-drop click-shadow-drop--blue">Sign Out</Link>
        {/* </div> */}
        {/* <input type="text" placeholder="Type Anime Name" className="searchBar" />
        <button className="searchButton click-shadow-drop click-shadow-drop--blue">Search</button> */}
      </nav>
    </header >
  )
}