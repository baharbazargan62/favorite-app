import React from 'react'
import MeetUpItem from "./MeetUpItem"
import classes from "./MeetUPList.module.css"
function MeetUpList({meetups}) {
  return (
    <ul className={classes.list}>
        {meetups.map((meetup)=> <MeetUpItem meetup={meetup}/>)}

      </ul>
   
  
 
  )
}

export default MeetUpList