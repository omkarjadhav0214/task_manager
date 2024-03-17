import './App.css';
import Navbar from './Components/Navbar';
import TaskList from './Components/TaskList';
// import TaskDetails from './Components/TaskDetails';
import TaskService from './Components/TaskService';
import { useState } from 'react';
// import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import TaskDetail from './Components/TaskDetail';
// import { create } from 'mathjs';
import {putData,getData, saveData} from './services';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom;

const App = ()=> {


  const [showTaskForm, setShowTaskForm] = useState(false);
  const [activeTab, setActiveTab] = useState('taskList');
  const [taskDetailId , setTaskDetailId] = useState(0)
  const [tasks, setTasks] = useState(getData());
 
 return (
   <Router>
     <div className="App">
       <Navbar setActiveTab={setActiveTab} />
       {/* {activeTab === "taskList" && (
         <TaskList
           setActiveTab={setActiveTab}
           setTaskDetailId={setTaskDetailId}
           tasks={tasks}
           setTasks={setTasks}
         />
       )}
       {activeTab === "taskDetail" && (
         <TaskDetail
           setActiveTab={setActiveTab}
           setTaskDetailId={setTaskDetailId}
           taskDetailId={taskDetailId}
           tasks={tasks}
           setTasks={setTasks}
         />
       )} */}
       {/* {activeTab === "taskService" && <TaskService />} */}
       <Routes>
         <Route
           path="/"
           element={
             <TaskList
               tasks={tasks}
               setTasks={setTasks}
               showTaskForm={showTaskForm}
               setShowTaskForm={setShowTaskForm}
             />
           }
         />
         <Route
           path="/tasks/:id"
           element={
             <TaskDetail
               tasks={tasks}
               setTasks={setTasks}
               showTaskForm={showTaskForm}
               setShowTaskForm={setShowTaskForm}
             />
           }
         />
       </Routes>
     </div>
   </Router>
 );
}

export default App;
