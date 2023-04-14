import '../styles/SongTile.scss';

const SongTile = (props) => {

  const {name, artist, pack} = props
  return (
    <div className='song-tile'>
      <img className='song-image' src='https://fastly.picsum.photos/id/779/200/300.jpg?hmac=DmFN06G0c1N5TAbj2O9YljZ0Vr8VWOZ4lPjLG8oAf8o'/>
      <div className='song-details'>
        <h2 className='song-name'>{name}</h2>
        <p className='song-artist'>{artist}</p>
        <p className='song-pack'>{pack}</p>
      </div>
    </div>
  );
};

export default SongTile;