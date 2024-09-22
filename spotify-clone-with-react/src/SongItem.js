import React from 'react';

const SongItem = ({ song, isPlaying, onPlay }) => {
  return (
    <div className="songItem" onClick={onPlay}>
      <img src={song.coverPath} alt={song.songName} />
      <span className="songName">{song.songName}</span>
      <span className="timestamp">{song.duration}</span>
      <i className={`fa ${isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}`}></i>
    </div>
  );
};

export default SongItem;
