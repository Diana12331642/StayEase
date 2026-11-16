
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        StayEase<span>.</span>
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/services">Services</Link>

        <Link to="/hotels">Hotels</Link>

        <Link to="/contact">Contact</Link>

      </div>

      <Link to="/hotels" className="nav-button">
        Explore Hotels
      </Link>

    </nav>
  );
}

export default NavBar;
