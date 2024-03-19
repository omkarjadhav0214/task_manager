// TaskList.js

import React, { useState } from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCalendarPlus } from "react-icons/fa";
import TaskForm from './TaskForm'; 
import './TaskList.css';
import {putData,getData, saveData, updateData, removeData} from '../services';


const TaskList = ({
  setActiveTab,
  setTaskDetailId,
  tasks,
  setTasks,
  showTaskForm,
  setShowTaskForm,
}) => {
  // const [showTaskForm, setShowTaskForm] = useState(false);
  // const [tasks, setTasks] = useState([
  //   { id: 1, teamMember: 'Alice Mayer', name: 'Task 1', dueDate: '2024-03-16', priority: 'High' },
  //   { id: 2, teamMember: 'Kate Moss', name: 'Task 2', dueDate: '2024-03-20', priority: 'Medium' },
  // ]);

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

  // const handleComplete = (taskID) =>{
  //   // update as completed -Manan
  //   var task = tasks.find((t)=> t.id === taskID)
  //   if(task) {
  //     task.complete = true;
  //     removeData(taskID);
  //     putData(task);
  //   }
  //   else
  //     console.log("task not found on complete");
  //     setTasks(getData());
  //     console.log(tasks);
  // }
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <div>
      <h2 className="task-list-title">Task List</h2>
      <button className="add-task-button" onClick={() => setShowTaskForm(true)}>
        {/* <FontAwesomeIcon icon={faPlus} className="add-task-icon" /> */}
        <FaCalendarPlus className="add-task-icon" />
          Add New Task
      </button>
      <div className="task-list">
        <div className="task task-header">
          <p className="task-info">Team Member</p>
          <p className="task-info nameMargin">Task Name</p>
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
            // onComplete={()=> handleComplete(task.id)}
            showTaskForm={showTaskForm}
            setShowTaskForm={setShowTaskForm}
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
