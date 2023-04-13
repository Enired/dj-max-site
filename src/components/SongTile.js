

const SongTile = (props) => {
  return (
    <div>
      <h1>{props.songName}</h1>
      <h3>{props.songArtist}</h3>
    </div>
  )
}

export default SongTile