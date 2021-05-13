import {AiOutlineStar} from 'react-icons/ai';

const Tvmovie = ({slideContent}) => {
  const post_path = 'https://image.tmdb.org/t/p/original';
  const {original_language, name, first_air_date,
    vote_average, vote_count, overview, poster_path, backdrop_path} = slideContent;
  const poster = post_path + poster_path;
  const cover = post_path + backdrop_path;
  const year = first_air_date.substring(0, 4);

  return <>
    <div className="tvMovie">
      <div className="cover-backdrop">
        <img src={cover} alt="" />
      </div>
      <h3>{year}</h3>
      <h2>{name}</h2>
      <h5><AiOutlineStar className="star-tv" /> {vote_average}</h5>
    </div>
  </>
}

export default Tvmovie;
