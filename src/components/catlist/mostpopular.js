import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import PopularMovie from './popularMovie';

SwiperCore.use([Navigation]);

const Mostpopular = () => {
  const [movieDbPop,setMovieDbPop] = useState([]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0c8eba5d41d59379c0d9a98afd4738fe&language=en-US&page=1')
    .then((response)=> response.json())
    .then((data)=>{setMovieDbPop(data.results)})
  },[])

  return <>
    {movieDbPop !== undefined ?
      <Swiper navigation={true} className="firstSwiper">
        {movieDbPop.slice(0,6).map((slideContent, index) => {
          return <SwiperSlide key={slideContent.id}>
            <PopularMovie slideContent={slideContent} />
          </SwiperSlide>
        })}
      </Swiper> : ''
    }
  </>;
}

export default Mostpopular;
