import { createContext , useState} from "react";
import React from 'react'
// createcontext is a object and argument can be anything in yhis case we can use obj
const FavoritesContext=createContext({
    favorites:[],
    totalFavorites : 0,
    addFavorite: (favoriteMeetup)=>{},
    removeFavorite :(meetUpId)=>{},
    itemIsFavorite :(meetUpId)  =>{}
});


export function FavoritesContextProvider(props) {
const [useFavorites,setUserFavorites]=useState([]);
  function addFavoritesHandler(favoriteMeetup){
     setUserFavorites((previous)=> previous.concat(favoriteMeetup))
  }
  function removeFavoriteHandler(meetupId){
    setUserFavorites((previous)=>{
return previous.filter((meetup)=> meetup.id !== meetupId)
    })
  }
  function itemIsFavorite(meetUpId){
    return  useFavorites.some(meetup=>meetUpId===meetup.id)
  }
const context={
    favorites:useFavorites,
    totalFavorites :useFavorites.length,
    addFavorite : addFavoritesHandler,
    removeFavorite : removeFavoriteHandler,
    itemIsFavorite : itemIsFavorite
};


  return <FavoritesContext.Provider value={context}>
  {props.children}
  </FavoritesContext.Provider>
    

}

export default FavoritesContext;