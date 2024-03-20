// Navbar.js

import React from 'react';
import './Navbar.css';
import axtriaLogo from '../assets/axtria_logo.png';

const Navbar = ({ setActiveTab }) => {
  return (
    <div className="navbar">
      <img src= {axtriaLogo}></img>
      {/* <button onClick={() => setActiveTab('taskList')}>Task List</button>
      <button onClick={() => setActiveTab('taskDetails')}>Task Details</button>
      <button onClick={() => setActiveTab('taskService')}>Task Service</button> */}
    </div>
  );
};

export default Navbar;
