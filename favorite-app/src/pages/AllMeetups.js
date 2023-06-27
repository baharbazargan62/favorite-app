import React from 'react';
import MeetUpList from "../components/layouts/MeetUpList"
import { useState,useEffect } from 'react';

function AllMeetups() {
const [loading,setLoading]=useState(true)
const [meetups,setMeetup]=useState([]);
useEffect(()=>{
  // setLoading(true);it is  cleaner to put it 
  fetch(
    "https://favorite-app-a4658-default-rtdb.firebaseio.com/meetups.json"
  ).then((response)=>{
     return response.json
    }).then((data)=>{
      for (const key in data ){
            const meetup={
              id:key,
              ...data[key]
            }
            meetups.push(meetup)
        }
      setLoading(false)
      setMeetup((meetups)=>{
        
      })
    })},[])
   
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