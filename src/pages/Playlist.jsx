import SongTile from '../components/SongTile';
import Carousel from '../components/Carousel';
import { useState } from 'react';


const listOfSongObjTEST = () => {
  const songList = [];
  for (let i = 1; i <= 5; i++) {
    const song = {
      name: `Song Name ${i}`,
      artist: `Song Artist ${i}`,
      pack: `DLC: ${i}`
    };

    songList.push(song);
  }
  return songList;
};

const Playlist = () => {
  const songList = listOfSongObjTEST();
  const songs = songList.map((song, index) => {
    return <SongTile name={song.name} artist={song.artist} pack={song.pack} key={index} />;
  });

  const [items, setItems] = useState(songs);


  return (
    <div className="playlist-page">
      {
        items.length > 0 ?
          <Carousel items={items} setItems={setItems} />
          :
          <h1>Playlist Complete</h1>
      }
    </div>
  );
};

export default Playlist;