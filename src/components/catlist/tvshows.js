import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Tvmovie from './tvmovie';
import { useFav } from "../useFav";

const Tvshows = () => {
  const [movieDb,setMovieDb] = useState([]);
  const { favourites, addFav } = useFav();

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=0c8eba5d41d59379c0d9a98afd4738fe&language=en-US&page=1')
    .then((response)=> response.json())
    .then((data)=>{setMovieDb(data.results)})
  },[])

  return <>
    <section className="popular_section">
      <div className="popular_sec_heading">
        <h2>Recently tv shows <span>Show More</span></h2>
      </div>
      {movieDb !== undefined ?
        <Swiper spaceBetween={30} navigation={true} slidesPerView={3}>
          {movieDb.slice(5,20).map((slideContent, index) => {
            return <SwiperSlide className="movie-item" key={slideContent.id}>
              <Tvmovie slideContent={slideContent} addFav={()=>addFav(slideContent)} />
            </SwiperSlide>
          })}
        </Swiper> : ''
      }
    </section>
  </>
}

export default Tvshows;
