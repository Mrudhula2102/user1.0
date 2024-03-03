import React, { useState } from 'react';
import Topbare from '../Topbare';
import { Button } from '@mui/material';

const Profile = (props) => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    department: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  return (
    <div>
        <Topbare xxx={props.checkLogout}/>
      <h2 align='center'>Employee Profile</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={employeeData.jobTitle}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={employeeData.department}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={employeeData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <Button variant='contained'>Submit</Button>
      </form>
    </div>
  );
};

export default Profile;
