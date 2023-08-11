import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function CreateTask() {
  const [activity, setOnChangeActivity] = useState(``);

  const onSubmit = (e) => {
    e.preventDefault();
    const activityvar = { activity: activity };

    axios
      .post("http://localhost:5000/activity/add", activityvar)
      .then((res) => {
        //this refreshes the page - instead can use hook use navigate
        window.location = "/";
        console.log("test");
      });

    console.log(activityvar);
  };

  return (
    <div>
      <Navbar />

      <h3>Create New Task</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Task: </label>
          {/* input onchangeactivity is the hook */}
          <input
            type='text'
            required
            className='form-control'
            value={activity}
            onChange={(e) => setOnChangeActivity(e.target.value)}
          />
        </div>
        <br></br>
        <div className='form-group'>
          <input
            type='submit'
            value='Create Activity Log'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
}
