import React, { useState } from 'react';
import { Button } from '@mui/material';
import UserSidebar from '../../components/UserSidebar';
import './profile.css';


const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    firstName: 'Lakshmi',
    lastName: 'Priya M S',
    jobTitle: 'Manager',
    department: 'Sales',
    email: 'lakshmi@gmail.com',
    phoneNumber: '4567890321',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData,[name]: value });
  };
  const handleEditToggle = () => {
    setEditing(!editing);
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setEmployeeData({ ...employeeData, [name]: value });
  // };

  const handleSave = () => {
    // Here, you can perform actions like sending the user data to a server
    // For now, let's log the user object to the console

    console.log(employeeData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    // Reset user data to its original state or fetch from API again if needed
    // For example:
    // setUserData({ hrId: 'EMP1234', fullName: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' });
  };

  return (
    <div className='grid-container'>
    
    <UserSidebar/> 
    <div className='profile-box'>     
    <h2 align='center' className='color'><b>EMPLOYEE PROFILE</b></h2>
    <div className='h'>
      <form>
        
          First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleChange}
          />
        <br /><br/>
          Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleChange}
          />
        <br /><br/>
          Job Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="jobTitle"
            value={employeeData.jobTitle}
            onChange={handleChange}
          />
        <br /><br/>
          Department:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="department"
            value={employeeData.department}
            onChange={handleChange}
          />
        <br /><br/>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        <br /><br/>
          Phone Number:&nbsp;
          <input
            type="text"
            name="phoneNumber"
            value={employeeData.phoneNumber}
            onChange={handleChange}
          />
        <br /><br/>
        {editing ? (
          <>
            <Button onClick={handleSave} variant='contained'>Save</Button> &nbsp;
            <Button onClick={handleCancel} variant='contained'>Cancel</Button>
          </>
        ) : (
          
          <Button onClick={handleEditToggle} variant='contained'>Edit</Button>
        )}
      </form>
      </div>
    </div>
    </div> 
  );
};

export default Profile;