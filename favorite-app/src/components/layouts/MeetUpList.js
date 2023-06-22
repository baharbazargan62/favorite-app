import React from 'react'

function MeetUpList({meetups}) {
  return (
    <div>

<ul>
    {meetups.map((meetup)=>{
      return <li></li>
    })}
   </ul>
    </div>
  )
}

export default MeetUpList