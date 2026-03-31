import { useState } from 'react';
import './App.css';

let nextId=0;
function App() {
  const [name,setName]=useState('');
  const [artists,setArtists]=useState([]);



  return (
    <>
      <h1>Artist names:</h1>
      <input
          value={name}
          onChange={e=> setName(e.target.value)}
      />
      <button onClick={()=>{
        setArtists([
          ...artists,
          {id:nextId++,name:name}
        ])
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
