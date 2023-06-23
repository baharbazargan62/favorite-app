import React from 'react'
import NewMeetingForm from '../components/layouts/NewMeetingForm'

function NewMeetup() {
  function addMeetupHandler(){

  }
  return (
    <div> 
      <h3>Add New Meeting</h3>
      <NewMeetingForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetup