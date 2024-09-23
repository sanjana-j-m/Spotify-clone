import React from 'react';
import Navbar from './Navbar'; // Import Navbar


const Home = () => {
  return (
    <div className="home-content">
      <Navbar /> {/* Render Navbar here */}
      <h1>Welcome to the Home Page</h1>
      <p>This is the content available after logging in.</p>
    </div>
  );
};

export default Home;
