import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
import TaskForm from "./TaskForm"; 
import { useParams } from "react-router-dom";

const TaskDetail = ({ tasks, setTasks, showTaskForm, setShowTaskForm }) => {
  let { id: taskDetailId } = useParams();
  taskDetailId = parseInt(taskDetailId);
  console.log(taskDetailId);

  // const [showTaskForm, setShowTaskForm] = useState(false);
  const [updateInProcess, setUpdateInProcess] = useState(false);

  useEffect(() => {
    const foundTask = findTaskById(taskDetailId);
    // console.log("details Clicked");
    console.log(foundTask);
  }, [taskDetailId, tasks]);

  const findTaskById = (taskDetailId) => {
    return tasks.find((t) => t.id === taskDetailId);
  };

  const foundTask = findTaskById(taskDetailId);

  const handleUpdateTask = (updatedObj) => {
    // console.log(updatedObj);
    // console.log("Task getting Updated");
    //find the id in the tasks and
    //  const taskGettingUpdated = tasks.find((t) => t.id === taskDetailId);
    //  console.log(taskGettingUpdated);
    const updatedTaskList = tasks.map((t) => {
      if (t.id === taskDetailId) {
        return { ...t, ...updatedObj };
      } else {
        return t;
      }
    });
    //  console.log(updatedTaskList);
    setTasks(updatedTaskList);
    setUpdateInProcess(false)
   
  };

  return (
    <div>
      <button
        onClick={() => {
          window.history.back();
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
           showTaskForm={showTaskForm} 
           setShowTaskForm = {setShowTaskForm} 
        />
      )}
    </div>
  );
};

export default TaskDetail;
