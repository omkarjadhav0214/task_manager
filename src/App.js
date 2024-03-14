import './App.css';
import Navbar from './Components/Navbar';
import TaskList from './Components/TaskList';
// import TaskDetails from './Components/TaskDetails';
import TaskService from './Components/TaskService';
import { useState } from 'react';
// import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import TaskDetail from './Components/TaskDetail';
// import { create } from 'mathjs';


const App = ()=> {

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <TaskList/>
  //   },
  //   {
  //     path:'/tasks/:id',
  //     element: <TaskDetail/>
  //   }
  // ])

  const [activeTab, setActiveTab] = useState('taskList');
  const [taskDetailId , setTaskDetailId] = useState(0)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      teamMember: "Alice Mayer",
      name: "Task 1",
      dueDate: "2024-03-15",
      priority: "High",
    },
    {
      id: 2,
      teamMember: "Kate Moss",
      name: "Task 2",
      dueDate: "2024-03-15",
      priority: "Medium",
    },
  ]);
 
 return (
   
     <div className="App">
       <Navbar setActiveTab={setActiveTab} />
       {activeTab === "taskList" && (
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
       )}
       {/* {activeTab === "taskService" && <TaskService />} */}
     </div>
   
 );
}

export default App;
