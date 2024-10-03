// Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = ({ toggleAlbums }) => {
  return (
    <nav className="navbar">
      <h1>My App</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><button onClick={toggleAlbums}>My Albums</button></li> {/* Toggle Albums button */}
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
