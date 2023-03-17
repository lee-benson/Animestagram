import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <h1>
        <div className="websiteTitleBlock">
          <p className="websiteTitleWords">
            Animestagram
          </p>
        </div>
      </h1>
      <nav>
        <div className="linkDiv">
          <Link to="/" className="linkHome">Home</Link>
          <Link to="/profile" className="linkProfile">Profile</Link>
          <Link to="/sign-out" className="linkSignOut">Sign Out</Link>
        </div>
        <input type="text" className="searchBar" />
        <button className="searchButton">Search</button>
      </nav>
    </header>
  )
}