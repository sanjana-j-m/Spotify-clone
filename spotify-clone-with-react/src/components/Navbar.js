import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="brand">
          <img src="logo.png" alt="Spotify" /> Spotify
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/player">Player</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
