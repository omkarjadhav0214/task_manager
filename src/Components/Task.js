// Task.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';


const Task = ({ id, onDelete  , showTaskForm, setShowTaskForm, teamMember , name , dueDate , priority, onComplete, onUpdate }) => {

  const getPriorityColor = () => {
    if(!priority)
      return '#fff';
    switch(priority.toLowerCase()) {
      case 'high':
        return'red';
      case'medium':
        return 'rgb(204, 204, 41)';
      case 'low':
        return 'green';
      default:
        return '#fff';

    }
  }; 

  return (
    <div className="task" >
      <p className="task-info">{teamMember}</p>
      <p className="task-info">{name}</p>
      <p className="task-info">{dueDate}</p>
      <p className="task-info" style={{color: getPriorityColor()}}>{priority.toUpperCase()}</p>


      <div className='btn'>
      <button className="action-button" onClick={onComplete}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        
        {/* <button
        className="details-button"
        onClick={function() {
          setActiveTab("taskDetail")
          setTaskDetailId(id)
        }}
      >
        Details */}
      {/* </button> */}
      <button className="taskLink delete-button "> <Link to={`/tasks/${id}`}>
        <i>Go</i>
        </Link></button>
       

      <button className="delete-button" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      </div>
    </div>
  );
};

Task.propTypes = {
  teamMember: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  OnUpdate: PropTypes.func.isRequired,
};

export default Task;
