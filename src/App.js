import logo from './logo.svg';
import './App.css';
import SongTile from './components/SongTile';


const listOfSongObjTEST = () => {
  const songList = []
  for(let i=0; i<10; i++){
    const song = {
      songName: `Song Name ${i}`,
      songArtist: `Song Artist ${i}`
    }

    songList.push(song);
  }
  return songList;
};



const App = () => {

  const songList = listOfSongObjTEST();

  return (
    <div className="App">
      {songList.map((e, index)=>{
        return <SongTile songName={e.songName} songArtist={e.songArtist} key={index}/>
      })}
    </div>
  );
}

export default App;
