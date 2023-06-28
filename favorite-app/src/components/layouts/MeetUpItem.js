import React from 'react';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-contxt';
import classes from "./MeetUpItem.module.css"
import Card from "./Card"
function MeetUpItem({meetup}) {
  const favoritesCtx=useContext(FavoritesContext);
  const itemIsFavorite=favoritesCtx.itemIsFavorite(meetup.id);

  function toggleFavoriteHandler(){
    if (itemIsFavorite){
      favoritesCtx.removeFavorite(meetup.id)
    }else {
      favoritesCtx.addFavorite({
        id : meetup.id,
        tittle : meetup.tittle,
        address : meetup.address,
        description : meetup.description,
        image : meetup.image
      })
    }
  }
  return (
    <li className={classes.item}>
      <Card>
     <div className={classes.image}>
       <img src={meetup.image} alt={meetup.tittle}></img>
     </div>
     <div className={classes.content}>
        <h3>{meetup.tittle}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
     </div>
     <div className={classes.actions}>

        <button onClick={toggleFavoriteHandler}>
          {itemIsFavorite ? "Remove from favorites item" : "to favorite"}
          </button>
     </div>
     </Card>
    </li>
  )
}

export default MeetUpItem;