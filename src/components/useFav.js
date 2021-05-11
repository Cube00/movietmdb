import { useState, useEffect } from 'react';

export const useFav = (item) => {
    const [favourites, setFavourites] = useState([]);

    const addFav = (item) => {
      const array = favourites;
      let addAprove = true;
      array.map((e, key)=>{
        if(e.id === item.id){
          array.splice(key, 1);
          addAprove = false;
        }
      })
      if(addAprove){
        array.push(item);
      }
      setFavourites([...array]);
      localStorage.setItem('favourites', JSON.stringify(favourites));

      var storage = localStorage.getItem('favItem' + (item.id) || 0);
      if(storage==null){
        localStorage.setItem(('favItem' + (item.id)), JSON.stringify(item));
      }else{
        localStorage.removeItem('favItem' + (item.id))
      }
    }

    const getArray = JSON.parse(localStorage.getItem('favourites') || 0);

    useEffect(()=>{
      if(getArray !==0){
        setFavourites([...getArray])
      }
    },[])

    return { favourites, addFav };
};
