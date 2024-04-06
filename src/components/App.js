import React, { useState, useEffect } from 'react';
import AlbumContainer from './AlbumContainer';
import AlbumForm from './AlbumForm';
// import Header from './Header'
// import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then(resp => resp.json())
      .then(setAlbums);
  }, []);

  return (
    <>
    <div id="album-header">
      <img
        src="https://i.imgur.com/M5maHKl.png"
        alt="albums header"
      />
    </div>
      <h1>Classic Albums</h1>
      <br />
      <AlbumContainer albums={albums} />
      <AlbumForm /> 
    </>
  );
}

export default App;