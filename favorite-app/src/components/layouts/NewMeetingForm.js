import React from 'react'
import Card from './Card'
import classes from "./NewMeetingForm.module.css"
function NewMeetingForm() {
  return (
    <Card>
     <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='tittle'>Meetup Tittle</label>
          <input type="text" required id="tittle"/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type="url" required id="image"/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup address</label>
          <input type="text" required id="address"/>
        </div>
        <div className={classes.control}>
          <label>Meetup description</label>
          <textarea id="description" required></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
     </form>

    </Card>
  )
}

export default NewMeetingForm