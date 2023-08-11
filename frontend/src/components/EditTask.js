import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function EditTask() {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const [activity, setOnChangeActivity] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/activity/${id}`)
      .then((response) => {
        setOnChangeActivity(response.data.activity);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const activityvar = { activity: activity };
    console.log(activityvar);

    console.log(`${process.env.REACT_APP_API_URL}/activity/update/${id}`);
    // console.log(e)

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/activity/update/${id}`,
        activityvar
      )
      .then((res) => {
        window.location = "/";
      });
  };

  return (
    <div>
      <Navbar />
      <h3>Create New Task</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Task: </label>
          <input
            type='text'
            required
            className='form-control'
            name='testactivity'
            value={activity}
            onChange={(e) => setOnChangeActivity(e.target.value)}
          />
        </div>
        <br></br>

        <div className='form-group'>
          <input
            type='submit'
            value='Update Activity Log'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
}
