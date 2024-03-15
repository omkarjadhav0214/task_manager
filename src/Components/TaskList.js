// TaskList.js

import React, { useState } from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TaskForm from './TaskForm'; 
import './TaskList.css';
import {putData,getData, saveData} from '../services';

const TaskList = ({ setActiveTab , setTaskDetailId,tasks, setTasks }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    putData(newTask);
    setShowTaskForm(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log(updatedTasks);
    saveData(updatedTasks);
  };

  const sortedTasks = tasks.slice().sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <div>
      <h2 className="task-list-title">Task List</h2>
      <button className="add-task-button" onClick={() => setShowTaskForm(true)}>
        <FontAwesomeIcon icon={faPlus} className="add-task-icon" />
        Add New Task
      </button>
      <div className="task-list">
        <div className="task task-header">
          <p className="task-info">Team Member</p>
          <p className="task-info">Task Name</p>
          <p className="task-info">Due Date</p>
          <p className="task-info">Priority</p>
          <p className="task-info">Actions</p>
        </div>
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            teamMember={task.teamMember}
            name={task.name}
            dueDate={task.dueDate}
            priority={task.priority}
            onDelete={() => handleDeleteTask(task.id)}
            setActiveTab={setActiveTab}
            setTaskDetailId={setTaskDetailId}
          />
        ))}
      </div>
      <button className="add-task-button" onClick={() => setShowTaskForm(true)}>
        Add New Task
      </button>
      {showTaskForm && (
        <TaskForm
          onAddTask={handleAddTask}
          onCancel={() => setShowTaskForm(false)}
        />
      )}
    </div>
  );
};

export default TaskList;
