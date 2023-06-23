import React, { useRef } from 'react'
import Card from './Card'
import classes from "./NewMeetingForm.module.css"
function NewMeetingForm(props) {
 const tittleInputRef=useRef();
 const imageInputRef=useRef();
 const addressInputRef=useRef();
 const descriptionInputRef=useRef()
    function submitHandler(event){
    event.preventDefault();
    const enteredTittle=tittleInputRef.current.value;
    const enteredImage=imageInputRef.current.value;
    const enteredAddress=addressInputRef.current.value;
    const enteredDescription=descriptionInputRef.current.value;

    const meetup={
        tittle:enteredTittle,
        image:enteredImage,
        address:enteredAddress,
        description:enteredDescription
    }
    props.onAddMeetup(meetup);
    }
  return (
    <Card>
     <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='tittle'>Meetup Tittle</label>
          <input type="text" required id="tittle" ref={tittleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label>Meetup description</label>
          <textarea id="description" required ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Meetup</button>
        </div>
     </form>

    </Card>
  )
}

export default NewMeetingForm