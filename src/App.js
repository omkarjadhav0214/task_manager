import './App.css';
import Navbar from './Components/Navbar';
import TaskList from './Components/TaskList';
import TaskDetails from './Components/TaskDetails';
import TaskService from './Components/TaskService';
import { useState } from 'react';


const App = ()=> {
  const[activeTab, setActiveTab] = useState('taskList');
  return (
    <div className="App">
      <Navbar setActiveTab={setActiveTab}/>
      {activeTab === 'taskList' && <TaskList/>}
      {activeTab === 'taskDetail' && <TaskDetails/>}
      {activeTab === 'taskService' && <TaskService />}
    </div>
  );
}

export default App;
