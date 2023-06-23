import React from 'react'
import NewMeetingForm from '../components/layouts/NewMeetingForm'
import { useNavigate } from "react-router-dom"
function NewMeetup() {
  const navigate = useNavigate();
  function getResponse(meetupData) {

      fetch(
        "https://favorite-app-a4658-default-rtdb.firebaseio.com/meetups.json",
        {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json'
            
          }
        }
      ).then(()=>{
         navigate("/")
        });  
    }

  return (
    <div> 
      <h3>Add New Meeting</h3>
      <NewMeetingForm onAddMeetup={getResponse}/>
    </div>
  )
  }

export default NewMeetup