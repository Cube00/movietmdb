import React, {useState, useEffect} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';

const Movie = ({slideContent,addFav,favourites})=>{
  const [state, setState] = useState(false);
  const post_path = 'https://image.tmdb.org/t/p/original';
  const {original_language, title, release_date,
    vote_average, vote_count, overview, poster_path, backdrop_path} = slideContent;
  const poster = post_path + poster_path;
  const year = release_date.substring(0, 4);

  useEffect(()=>{
    const getItem = JSON.parse(localStorage.getItem('favourites') || 0);
    if(getItem !== 0){
      var filt = getItem.map((item)=> {return item.title === title});
      if(filt.includes(true)){
        setState(true);
      }
    }
  },[state])

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
          {state === true ? (
            <button onClick={()=>{addFav(slideContent); setState(false)}} className="add_fav">
              <AiFillHeart/>
            </button>) : (
            <button onClick={()=>{addFav(slideContent); setState(true)}} className="add_fav">
              <AiOutlineHeart/>
            </button>)
            }

          <button className="details">View Details</button>
        </div>
      </div>
    </div>
  </>
}

export default Movie;
