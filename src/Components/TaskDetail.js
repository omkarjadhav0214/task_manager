import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
import TaskForm from "./TaskForm"; 

const TaskDetail = ({ setActiveTab, setTaskDetailId, tasks , taskDetailId , setTasks}) =>{
  
  const [showTaskForm , setShowTaskForm] = useState(false)
  const [updateInProcess , setUpdateInProcess] = useState(false)

  useEffect(() => {
    const foundTask = findTaskById(taskDetailId);
  }, [taskDetailId, tasks]);

  const findTaskById = (taskDetailId) => {
    return tasks.find((t) => t.id === taskDetailId);
  };

  const foundTask = findTaskById(taskDetailId);

   const handleUpdateTask = (updatedObj) => {
     console.log(updatedObj);
     console.log("Task getting Updated");
     //find the id in the tasks and
    //  const taskGettingUpdated = tasks.find((t) => t.id === taskDetailId);
    //  console.log(taskGettingUpdated);
     const updatedTaskList = tasks.map((t)=>{
      if(t.id === taskDetailId){
        return {...t , ...updatedObj}
      }
      else{
        return t
      }
     })
    //  console.log(updatedTaskList);
     setTasks(updatedTaskList)
     
   };

  return (
    <div>
      <button
        onClick={() => {
          setActiveTab("taskList");
          setTaskDetailId(0);
        }}
      >
        Show All Tasks
      </button>

      {foundTask && (
        <div>
          <p>Team Member: {foundTask.teamMember}</p>
          <p>Name : {foundTask.name}</p>
          <p>dueDate : {foundTask.dueDate}</p>
          <p>Priority: {foundTask.priority}</p>

          <button
            onClick={() => {
              console.log("Update Started");
              setShowTaskForm(true);
              setUpdateInProcess(true);
            }}
          >
            Update
          </button>
        </div>
      )}
      {showTaskForm && (
        <TaskForm
          onUpdateTask={handleUpdateTask}
          onCancel={() => setShowTaskForm(false)}
          updateInProcess={updateInProcess}
          setUpdateInProcess={setUpdateInProcess}
          currentTaskToUpdate={foundTask}
        />
      )}
    </div>
  ); 
}

export default TaskDetail;
