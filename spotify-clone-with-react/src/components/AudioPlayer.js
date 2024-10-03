import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ addSongToPlaylist }) => {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioElement = useRef(new Audio('songs/1.mp3'));
  const progressBar = useRef(null);
  const gifRef = useRef(null);

  const songs = [
    { songName: "Evening", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Raabta", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Museum", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Morning", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Hello", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Peace", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Na jaana", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Queen", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Cell", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Home", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
  ];

  useEffect(() => {
    const updateProgress = () => {
      const progressValue = parseInt((audioElement.current.currentTime / audioElement.current.duration) * 100);
      setProgress(progressValue);
    };

    audioElement.current.addEventListener('timeupdate', updateProgress);
    return () => {
      audioElement.current.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioElement.current.pause();
      gifRef.current.style.opacity = 0;
    } else {
      audioElement.current.play();
      gifRef.current.style.opacity = 1;
    }
    setIsPlaying(!isPlaying);
  };

  const handleSongItemClick = (index) => {
    if (songIndex === index && isPlaying) {
      audioElement.current.pause();
      setIsPlaying(false);
      gifRef.current.style.opacity = 0;
    } else {
      setSongIndex(index);
      audioElement.current.src = songs[index].filePath;
      audioElement.current.currentTime = 0;
      audioElement.current.play();
      setIsPlaying(true);
      gifRef.current.style.opacity = 1;
    }
  };

  const handleNext = () => {
    let newIndex = songIndex >= songs.length - 1 ? 0 : songIndex + 1;
    setSongIndex(newIndex);
    audioElement.current.src = songs[newIndex].filePath;
    audioElement.current.currentTime = 0;
    audioElement.current.play();
    setIsPlaying(true);
    gifRef.current.style.opacity = 1;
  };

  const handlePrevious = () => {
    let newIndex = songIndex <= 0 ? 0 : songIndex - 1;
    setSongIndex(newIndex);
    audioElement.current.src = songs[newIndex].filePath;
    audioElement.current.currentTime = 0;
    audioElement.current.play();
    setIsPlaying(true);
    gifRef.current.style.opacity = 1;
  };

  const handleProgressBarChange = (e) => {
    const newTime = (e.target.value * audioElement.current.duration) / 100;
    audioElement.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to Spotify</h1>
      <div className="songList">
        {songs.map((song, index) => (
          <div key={index} className="songItem" onClick={() => handleSongItemClick(index)}>
            <img src={song.coverPath} alt={song.songName} />
            <span className="songName">{song.songName}</span>
            <i
              id={index}
              className={isPlaying && songIndex === index ? 'fa fa-pause-circle songItemPlay' : 'fa fa-play-circle songItemPlay'}
            ></i>
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the onClick of the songItem
              addSongToPlaylist(song.songName); // Call the function to add the song to the playlist
            }}>
              Add to Playlist
            </button>
          </div>
        ))}
      </div>
      {/* Move play/pause and seek bar below the song list */}
      <div id="controls" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div id="masterPlay" onClick={togglePlayPause}>
          {isPlaying ? (
            <i className="fa fa-pause-circle" style={{ fontSize: '24px' }}></i>
          ) : (
            <i className="fa fa-play-circle" style={{ fontSize: '24px' }}></i>
          )}
        </div>
        <input
          ref={progressBar}
          id="myProgressBar"
          type="range"
          value={progress}
          onChange={handleProgressBarChange}
        />
        <div ref={gifRef} id="gif" style={{ opacity: 0 }}>
          <img src="gif.gif" alt="Playing gif" />
        </div>
        <div id="masterSongName">{songs[songIndex].songName}</div>
        <div style={{ marginTop: '10px' }}>
          <button id="previous" onClick={handlePrevious}>
            Previous
          </button>
          <button id="next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
