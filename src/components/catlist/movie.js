const Movie = ({slideContent})=>{
  const post_path = 'https://image.tmdb.org/t/p/original';
  const {original_language, title, release_date,
    vote_average, vote_count, overview, poster_path, backdrop_path} = slideContent;
  const poster = post_path + poster_path;
  return <>
    <h2>{title}</h2>
    <h3>{release_date}</h3>
  </>
}

export default Movie;
