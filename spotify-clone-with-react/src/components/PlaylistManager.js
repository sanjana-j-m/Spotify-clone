import React, { useState } from 'react';

const PlaylistManager = () => {
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [songsInPlaylist, setSongsInPlaylist] = useState([]);

  const handleCreatePlaylist = () => {
    if (newPlaylistName) {
      setPlaylists([...playlists, { name: newPlaylistName, songs: [] }]);
      setNewPlaylistName('');
    }
  };

  const handleDeletePlaylist = (index) => {
    const updatedPlaylists = playlists.filter((_, i) => i !== index);
    setPlaylists(updatedPlaylists);
    if (selectedPlaylist === index) setSelectedPlaylist(null);
  };

  const handleSelectPlaylist = (index) => {
    setSelectedPlaylist(index);
    setSongsInPlaylist(playlists[index].songs);
  };

  const handleAddSongToPlaylist = (song) => {
    if (selectedPlaylist !== null) {
      const updatedPlaylists = [...playlists];
      updatedPlaylists[selectedPlaylist].songs.push(song);
      setPlaylists(updatedPlaylists);
      setSongsInPlaylist(updatedPlaylists[selectedPlaylist].songs);
    }
  };

  const handleDeleteSongFromPlaylist = (song) => {
    if (selectedPlaylist !== null) {
      const updatedPlaylists = [...playlists];
      updatedPlaylists[selectedPlaylist].songs = updatedPlaylists[selectedPlaylist].songs.filter(s => s !== song);
      setPlaylists(updatedPlaylists);
      setSongsInPlaylist(updatedPlaylists[selectedPlaylist].songs);
    }
  };

  return (
    <div>
      <h2>Manage Playlists</h2>
      <input
        type="text"
        value={newPlaylistName}
        onChange={(e) => setNewPlaylistName(e.target.value)}
        placeholder="New Playlist Name"
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>

      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>
            {playlist.name}
            <button onClick={() => handleSelectPlaylist(index)}>Select</button>
            <button onClick={() => handleDeletePlaylist(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedPlaylist !== null && (
        <div>
          <h3>{playlists[selectedPlaylist].name}</h3>
          <h4>Songs</h4>
          <ul>
            {songsInPlaylist.map((song, index) => (
              <li key={index}>
                {song}
                <button onClick={() => handleDeleteSongFromPlaylist(song)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlaylistManager;
