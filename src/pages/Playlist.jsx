import SongTile from '../components/SongTile';
import Carousel from '../components/Carousel';


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

const Playlist = () => {
  const songList = listOfSongObjTEST();
  const items = songList.map((song, index)=>{
    return <SongTile name={song.name} artist={song.artist} pack={song.pack} key={index}/>
  })


  return(
    <div className="playlist-page">
      <Carousel items={items}/>
    </div>
  )
}

export default Playlist