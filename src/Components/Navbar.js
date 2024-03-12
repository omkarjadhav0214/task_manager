// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = ({ setActiveTab }) => {
  return (
    <div className="navbar">
      <button onClick={() => setActiveTab('taskList')}>Task List</button>
      <button onClick={() => setActiveTab('taskDetails')}>Task Details</button>
      <button onClick={() => setActiveTab('taskService')}>Task Service</button>
    </div>
  );
};

export default Navbar;
