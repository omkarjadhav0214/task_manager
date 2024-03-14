// TaskList.js

import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm'; 
import './TaskList.css';

const TaskList = ({ setActiveTab , setTaskDetailId , tasks , setTasks}) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     teamMember: "Alice Mayer",
  //     name: "Task 1",
  //     dueDate: "24/03/2024",
  //     priority: "High",
  //   },
  //   {
  //     id: 2,
  //     teamMember: "Kate Moss",
  //     name: "Task 2",
  //     dueDate: "20/03/2024",
  //     priority: "Medium",
  //   },
  // ]);
  // for(let i = 0 ; i < tasks.length ; i++){
  //   console.log(tasks[i]);
  // }

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowTaskForm(false);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2 className="task-list-title">Task List</h2>
      <div className="task-list">
        <div className="task task-header">
          <p className="task-info">Team Member</p>
          <p className="task-info">Task Name</p>
          <p className="task-info">Due Date</p>
          <p className="task-info">Priority</p>
          <p className="task-info">Actions</p>
        </div>
        {tasks.map((task) => (
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
