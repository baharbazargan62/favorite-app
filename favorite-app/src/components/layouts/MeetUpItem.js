import React from 'react'
import classes from "./MeetUpItem.module.css"
import Card from "./Card"
function MeetUpItem({meetup}) {
  return (
    <li className={classes.item}>
      <Card>
     <div className={classes.image}>
       <img src={meetup.img} alt={meetup.tittle}></img>
     </div>
     <div className={classes.content}>
        <h3>{meetup.tittle}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
     </div>
     <div className={classes.actions}>

        <button>To favorite </button>
     </div>
     </Card>
    </li>
  )
}

export default MeetUpItem;