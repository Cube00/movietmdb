import {useState, useEffect} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {FiMoreVertical} from 'react-icons/fi';
import { useFav } from "../useFav";

const Tvmovie = ({slideContent, addFav}) => {
  const [state, setState] = useState(false);
  const [enable, setEnable] = useState(false);
  const post_path = 'https://image.tmdb.org/t/p/original';
  const {original_language, name, first_air_date,
    vote_average, vote_count, overview, poster_path, backdrop_path} = slideContent;
  const poster = post_path + poster_path;
  const cover = post_path + backdrop_path;
  const year = first_air_date.substring(0, 4);

  useEffect(()=>{
    const getItem = JSON.parse(localStorage.getItem('favourites') || 0);
    if(getItem !== 0){
      var filt = getItem.map((item)=> {return item.name === name});
      if(filt.includes(true)){
        setState(true);
      }
    }
  },[state])

  const handleClick = () =>{
    setEnable(true);
    if(enable===true){
      setEnable(false)
    }
  }

  return <>
    <div className="tvMovie" onMouseLeave={()=>{setEnable(false)}}>
      <div className="cover-backdrop">
        <img src={cover} alt="" />
      </div>
      <div className="more_setts">
        <FiMoreVertical onClick={()=>{handleClick()}} className="m_ic_sets"/>
      </div>
      <div className={enable === true ? "addit_blf active" : "addit_blf"}>
        {state === true ? (
          <button onClick={()=>{addFav(slideContent); setState(false)}} className="add_fav_tv">
            <AiFillHeart/>
          </button>) : (
          <button onClick={()=>{addFav(slideContent); setState(true)}} className="add_fav_tv">
            <AiOutlineHeart/>
          </button>)
        }
      </div>
      <h3>{year}</h3>
      <h2>{name}</h2>
      <h5><AiOutlineStar className="star-tv" /> {vote_average}</h5>
    </div>
  </>
}

export default Tvmovie;
