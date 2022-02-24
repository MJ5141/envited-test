import React from 'react'
import { Link } from "react-router-dom";
import './AddEvent.css';

const AddEvent = () => {
  return (
    <div className="container">
      <h1> Add New Event</h1>
       <div className="py-2">
       <form>
         <div className="form">
        <div class="col-md-4 ">
          <label for="inputEmail4" className="form-label">🎉 Event Name</label>
          <input type="text" class="form-control" id="inputEmail4" placeholder='Event name'/>

          <label for="inputPassword4" class="form-label">⛄️ Host Name</label>
          <input type="text" class="form-control" id="inputPassword4" placeholder='Host name'/>

          <label for="inputEmail4" class="form-label">⏰ Start Time</label>
          <input type="time" class="form-control" id="inputEmail4"/>

          <label for="inputPassword4" class="form-label">⏰ End Time</label>
          <input type="time" class="form-control" id="inputPassword4"/>

          <label for="inputEmail4" class="form-label">🗓 Start Date</label>
          <input type="date" class="form-control" id="inputEmail4"/>

          <label for="inputPassword4" class="form-label">🗓 End Date</label>
          <input type="date" class="form-control" id="inputPassword4"/>

          <label for="inputEmail4" class="form-label">📍 Location</label>
          <input type="address" class="form-control" id="inputEmail4" placeholder='Location'/>

          <label for="inputPassword4" class="form-label">📸 Event Picture</label>
          <input type="file" class="form-control" id="inputPassword4"/>
        </div>
        </div>
        <button className="nav-btn"><Link className="nav-btn" to="/event">Next</Link></button>
      </form>
      </div> 
    </div>
  )
}

export default AddEvent
