import logo from './logo.svg';
import './App.css';
import SongTile from './components/SongTile';


const listOfSongObjTEST = () => {
  const songList = []
  for(let i=1; i<=5; i++){
    const song = {
      name: `Song Name ${i}`,
      artist: `Song Artist ${i}`,
      pack: `DLC: ${i}`
    }

    songList.push(song);
  }
  return songList;
};



const App = () => {

  const songList = listOfSongObjTEST();

  return (
    <div className="App">
      {songList.map((song, index)=>{
        return <SongTile name={song.name} artist={song.artist} pack={song.pack} key={index}/>
      })}
    </div>
  );
}

export default App;
