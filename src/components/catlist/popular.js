import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Movie from './movie';

const Popular = () => {
  const [movieDb,setMovieDb] = useState([]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0c8eba5d41d59379c0d9a98afd4738fe&language=en-US&page=1')
    .then((response)=> response.json())
    .then((data)=>{setMovieDb(data.results)})
  },[])

  return <>
    {movieDb !== undefined ?
      <Swiper spaceBetween={20} slidesPerView={5}>
        {movieDb.slice(6,20).map((slideContent, index) => {
          return <SwiperSlide className="movie-item" key={slideContent.id}>
            <Movie slideContent={slideContent} />
          </SwiperSlide>
        })}
      </Swiper> : ''
    }
  </>;
}

export default Popular;
