import './index.css'

const MusicPlaylist = props => {
  const {songDetails, updateList} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelete = () => {
    updateList(id)
  }

  return (
    <li className="each-song-item">
      <div className="song-img-name-genre-container">
        <img src={imageUrl} alt="track" className="song-img" />
        <div className="name-genre-container">
          <p className="song-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-icon-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default MusicPlaylist
