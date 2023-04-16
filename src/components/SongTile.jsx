import '../styles/SongTile.scss';
import testImage from '../resources/images/song-tile-images/DJMAXTEST.jpg';

const SongTile = (props) => {

  const {name, artist, pack} = props
  return (
    <div className='song-tile'>
      <img className='song-image' src={testImage}/>
      <div className='song-details'>
        <h2 className='song-name'>{name}</h2>
        <p className='song-artist'>{artist}</p>
        <p className='song-pack'>{pack}</p>
      </div>
    </div>
  );
};

export default SongTile;