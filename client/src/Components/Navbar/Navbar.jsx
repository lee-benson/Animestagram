import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <h1>Animestagram</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/sign-out">Sign Out</Link>
        <input type="text" className="searchBar" />
        <button className="searchButton">Search</button>
      </nav>
    </header>
  )
}