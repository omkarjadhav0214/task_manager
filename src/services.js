// Created by - Manan (a7507)
// Date- 14/03/24

var tasks = []
  
  export function saveData(tasksList){
    // function to put object array, taskList in memory
    localStorage.setItem('taskList', JSON.stringify(tasksList));
    tasks= getData();
    return tasks;
  }
  
  export function putData(task){
    // function takes 1 object and stores in array in storage
      getData();
      tasks.push(task);
      localStorage.setItem('taskList', JSON.stringify(tasks));
      return tasks;
  }
  
  export function getData(){
    // returns list of task objects
    tasks = JSON.parse(localStorage.getItem('taskList'));
    if(!tasks)
     {

      //tasks = [{teamMember: "You", name: "Add a task", dueDate: '2030-12-31', priority: 'HIGH'}];
      tasks = []
    }
    return tasks;
  }
  
  export function updateData(id, editedTask){
    // changes the task from array and saves in storage
    tasks = tasks.filter(task=> task['taskID'] !== id);
    tasks.push(editedTask);
    localStorage.setItem('taskList', JSON.stringify(tasks));
    return tasks;
  }
  
  export function removeData(id){
    // function removes data object from memory
    tasks = tasks.filter(task=> task['taskID'] !== id);
    localStorage.setItem('taskList', JSON.stringify(tasks));
    return tasks;
  }
  
  export function sortByDate(){
    // function returns the sorted array of tasks by their due date
    tasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    return tasks;
  }
  
  export function sortByPriority(){
    // function returns the sorted array of tasks by their priority key
    const order = ['high', 'medium', 'low'];
    getData();
    tasks.sort((x, y) => order.indexOf(x.priority) - order.indexOf(y.priority));
    return tasks;
  }

