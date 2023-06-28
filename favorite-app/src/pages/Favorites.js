import React from 'react';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-contxt';
import MeetUpList from '../components/layouts/MeetUpList';

export default function Favorites() {
  const favoriteCtx=useContext(FavoritesContext);
  let content;
  if(favoriteCtx.totalFavorites ===0){
     content=<p>you got no favorites yet start adding some?</p>
  }else {
    content=<MeetUpList meetups={favoriteCtx}/>
  }
  return (
    <section>
      <h1>My favorites </h1>
    {content}
     </section>
  )
}
