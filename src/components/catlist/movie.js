import {AiOutlineHeart} from 'react-icons/ai';

const Movie = ({slideContent})=>{
  const post_path = 'https://image.tmdb.org/t/p/original';
  const {original_language, title, release_date,
    vote_average, vote_count, overview, poster_path, backdrop_path} = slideContent;
  const poster = post_path + poster_path;
  const year = release_date.substring(0, 4);
  return <>
    <div className="movie_image">
      <img src={poster} alt="" />
    </div>
    <div className="additional_info">
      <div className="bord">
        <div className="bord_headings">
          <h2>
            <div>{year}</div>
            {title}
          </h2>
          <div className="rating">
            {vote_average}
          </div>
        </div>
        <div className="overview_movie">
          <p>{overview}</p>
        </div>
        <div className="movie_details">
          <button className="add_fav"><AiOutlineHeart/></button>
          <button className="details">View Details</button>
        </div>
      </div>
    </div>
  </>
}

export default Movie;
