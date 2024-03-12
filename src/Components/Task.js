// Task.js

import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Task = ({ teamMember, name, dueDate, priority, onDelete }) => {
  return (
    <div className="task">
      <p className="task-info">{teamMember}</p>
      <p className="task-info">{name}</p>
      <p className="task-info">{dueDate}</p>
      <p className="task-info">{priority}</p>
      <button className="delete-button" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

Task.propTypes = {
  teamMember: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
