import {FaPlay} from 'react-icons/fa';

const PopularMovie = ({slideContent})=>{
  const post_path = 'https://image.tmdb.org/t/p/original';
  const {original_language, title, release_date,
    vote_average, overview, backdrop_path} = slideContent;
  const posterCover = post_path + backdrop_path;

  return <>
    <div className="cover_items">
      <img src={posterCover} alt=""/>
      <div className="popular_overview">
        <button className="watchNow">
          Watch Now!
        </button>
        <button className="playNow">
          <FaPlay className="play_icon"/>
        </button>
        <h2>{title}</h2>
        <div className="addit_inf">
          <span>{original_language}</span>
          <span>{release_date}</span>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  </>
}

export default PopularMovie;
