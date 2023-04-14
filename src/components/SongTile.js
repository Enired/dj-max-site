import '../styles/SongTile.scss';

const SongTile = (props) => {

  const {name, artist, pack} = props
  return (
    <div className='song-tile'>
      <div className='song-details'>
        <h2 className='song-name'>{name}</h2>
        <p className='song-artist'>{artist}</p>
        <p className='song-pack'>{pack}</p>
      </div>
    </div>
  );
};

export default SongTile;