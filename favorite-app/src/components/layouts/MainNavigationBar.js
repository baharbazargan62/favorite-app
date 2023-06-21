import React from "react";
import { Link } from "react-router-dom";
function MainNavigationBar() {
  return (
    <header>
        <div>Meet up </div>
<nav>
 <ul>
   <li>
    <Link to="/">All Meetups</Link>
   </li>
   <li>
    <Link to="/new-meetings">Add New Meetup </Link>
   </li>
   <li>
    <Link to="/favorites">My Favorites</Link>
   </li>
 </ul> 
</nav>

    </header>
);
}

export default MainNavigationBar;