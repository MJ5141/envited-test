import React from 'react'
import './Event.css';

const Event = () => {
  return (
    <div classname="container">
        <div className="head">
            <h1> Anica's 22nd <br></br>Birthday</h1>
            <h5>Hosted by Anica</h5>
        </div>
      
      <div className="options">
      <button className="op">✔️</button>
      <button className="op">❓</button>
      <button className="op">❌</button>
      </div>
      <div className="invite">
          <button className="opp">✉️ Invite a friend</button>
         <button>...</button>
      </div>

      <div className="address">
          <h4> Sat 16 Oct 2022 6:00PM</h4>
          <h4> Sat 16 Oct 2022 11:00PM</h4>
          <h6>Add to calender</h6>
      </div>

      <div className="time">
          <h4>84 Davy Street</h4>
          <h6>Open in maps</h6>
      </div>

      <div className="Buttons">
          <button>Details</button>
          <button>Posts</button>
      </div>
      
      
    </div>
  )
}

export default Event
