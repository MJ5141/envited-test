import React from 'react'
import { Link } from "react-router-dom";

const AddEvent = () => {
  return (
    <div className="py=1">
      <div className="container">
          <h1> Add New Event</h1>
        <div className="py-2">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Event Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Host Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Start Time </label>
    <input type="time" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">End Time</label>
    <input type="time" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Start Date</label>
    <input type="date" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">End date</label>
    <input type="date" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Location</label>
    <input type="address" class="form-control" id="exampleInputPassword1"/>
  </div>
  <Link className="nav-btn" to="/show">Next</Link>
</form>
        </div> 
     </div>

 </div>
  )
}

export default AddEvent
