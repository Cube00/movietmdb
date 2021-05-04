const PopularMovie = ({slideContent})=>{
  const post_path = 'https://image.tmdb.org/t/p/original';
  const {original_language, title, release_date,
    vote_average, vote_count, overview, poster_path, backdrop_path, popularity} = slideContent;
  const poster = post_path + poster_path;
  const posterCover = post_path + backdrop_path;

  return <>
    <div className="cover_items">
      <img src={posterCover} alt=""/>
      <button className="watchNow">
        Watch Now!
      </button>
      <div className="popular_overview">
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
