import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-contxt";

function MainNavigationBar() {
  const favoriteCtx=useContext(FavoritesContext);
  return (
    <header className={classes.header}>
        <div className={classes.logo}>BAHAR  BAZARGAN </div>
<nav>
 <ul>
   <li>
    <Link to="/">All Meetups</Link>
   </li>
   <li>
    <Link to="/new-meetings">Add New Meetup </Link>
   </li>
   <li>
    <Link to="/favorites">My Favorites<span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
   </li>
 </ul> 
</nav>

    </header>
);
}

export default MainNavigationBar;