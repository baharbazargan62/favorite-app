import React from 'react';
import MeetUpList from "../components/layouts/MeetUpList"
import { useState } from 'react';

function AllMeetups() {
const [loading,setLoading]=useState(true)
const [meetups,setMeetup]=useState([])
  fetch(
    "https://favorite-app-a4658-default-rtdb.firebaseio.com/meetups.json"
  ).then((response)=>{
     return response.json
    }).then((data)=>{
      setLoading(false)
      setMeetup(data)
    }); 
  if (loading){
        return(
          <section>
            <p>loading ....</p>
          </section>
        )
      }
      return (
    <div>
   <h1>All meeting</h1>
   <MeetUpList meetups={meetups}/>

    </div>
  )
}

export default AllMeetups