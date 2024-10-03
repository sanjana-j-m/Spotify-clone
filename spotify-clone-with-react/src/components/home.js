// Home.js
import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import './home.css'; // Import the CSS file for styling
import AudioPlayer from './AudioPlayer'; // Import the AudioPlayer component
import PlaylistManager from './PlaylistManager';
const Home = () => {
  // Use a direct URL for the cover image
  const coverImageUrl = 'spotify-clone-with-react/public/covers/bg.jpg'; // Replace with your actual image URL

  return (
    <div className="home-content">
      {/* <Navbar /> Render Navbar here */}
      <h1>Welcome to the Home Page</h1>
      <p>This is the content available after logging in.</p>
      <div className="audio-player-container">
        <AudioPlayer /> {/* Render the audio player component */}
        
      </div>
      <PlaylistManager />
    </div>
  );
};

export default Home;
