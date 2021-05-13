import {useState, useReducer, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Movie from './movie';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { useFav } from "../useFav";

const setCat = (state,action) => {
  switch (action.type) {
    case 'Popular':
      value = 'Popular';
      return action.payload = 'popular';
    case 'Top Rated':
      value = 'Top Rated';
      return action.payload = 'top_rated';
    case 'Upcoming':
      value = 'Upcoming';
      return action.payload = 'upcoming';
    default:
      return '';
  }
}

let value = 'popular';
const RecentlyMovies = () => {
  const [movieDb,setMovieDb] = useState([]);
  const [state, dispatch] = useReducer(setCat, value);
  const [classes, setClasses] = useState(false);
  const { favourites, addFav } = useFav();

  const setDispatch = (e) => {
    dispatch({type: e.target.textContent});
    setClasses(false);
  }

  const setCl = () => {
    setClasses(true);
    if(classes === true){
      setClasses(false);
    }
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${state}?api_key=0c8eba5d41d59379c0d9a98afd4738fe&language=en-US&page=1`)
    .then((response)=> response.json())
    .then((data)=>{setMovieDb(data.results)})
  },[state])

  return <>
    <section className="popular_section">
      <div className="popular_sec_heading">
        <h2>Recently Movies <span>Show More</span></h2>
        <div onClick={()=>setCl()} className="choose_cat">
          <span>{value}</span>
          <MdKeyboardArrowDown className="arrow_drop"/>
        </div>
        <div className={classes === true ? 'categories_block vis' : 'categories_block inv'}>
          <li onClick={(e)=>setDispatch(e)}>Popular</li>
          <li onClick={(e)=>setDispatch(e)}>Top Rated</li>
          <li onClick={(e)=>setDispatch(e)}>Upcoming</li>
        </div>
      </div>
      {movieDb !== undefined ?
        <Swiper spaceBetween={30} slidesPerView={5} slidesPerGroup={5}>
          {movieDb.slice(5,20).map((slideContent, index) => {
            return <SwiperSlide className="movie-item" key={slideContent.id}>
                <Movie
                  slideContent={slideContent}
                  addFav={()=>addFav(slideContent)}
                  favourites={favourites}
                  />
            </SwiperSlide>
          })}
        </Swiper> : ''
      }
    </section>
  </>;
}

export default RecentlyMovies;
