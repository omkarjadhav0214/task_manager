// TaskForm.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css';

const TaskForm = ({ onAddTask, onCancel }) => {
  const [teamMember, setTeamMember] = useState('');
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [errors, setErrors] = useState({});

  const handleAddTask = () => {

    if(!taskName || !dueDate || !priority){
      alert('Please fill out all the fields');
      return;
    }
    const validationErrors = {};

    // Validate taskName
    if (taskName.length < 5) {
      validationErrors.taskName = 'Task name must be at least 5 characters long';
    }

    // Validate dueDate
    const currentDate = new Date().toISOString().split('T')[0];
    if (dueDate < currentDate) {
      validationErrors.dueDate = 'Due date cannot be in the past';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newTask = {
        id: Math.random(), 
        teamMember,
        name: taskName,
        dueDate,
        priority,
      };

      onAddTask(newTask);
      resetForm();
    }
  };

  const resetForm = () => {
    setTeamMember('');
    setTaskName('');
    setDueDate('');
    setPriority('');
    setErrors({});
  };

  return (
    <div className="task-form-overlay">
      <div className="task-form">
        <h3>Add New Task</h3>
        <label>
          Team Member:
          <input type="text" value={teamMember} onChange={(e) => setTeamMember(e.target.value)} />
        </label>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          {errors.taskName && <p className="error-message">{errors.taskName}</p>}
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          {errors.dueDate && <p className="error-message">{errors.dueDate}</p>}
        </label>

        <label>
          Priority:
          {/* <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} /> */}
        </label>
        <select 
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        

        <div className="form-buttons">
          <button onClick={handleAddTask}>Add Task</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default TaskForm;
