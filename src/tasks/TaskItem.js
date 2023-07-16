import React, {useState} from "react";
import './styles.css'

const TaskItem = ({ task, onDelete }) => {
  const [enteredTask, setEnteredTask] = useState(false);
  const [buttonText, setButtonText] = useState('MarkFinished');

  const handleToggleTasks = () => {
    setEnteredTask(!enteredTask);
  };

  const handleMarkFinished = () => {
    setButtonText('Finished!');
  };

  return (
    <li>

      <h3>{task.name}</h3>
 <div>
  <button className="button" onClick={handleToggleTasks}>
  </button>
    <>
    <p>Date: {task.date}</p>
    <p>Description: {task.description}</p>
    <p>Priority: {task.priority}</p>
    </>
    <button className="button" onClick={onDelete}>Delete</button>
    {!enteredTask && (
      <button className="button" onClick={handleMarkFinished}> {buttonText}  </button>
    )}
  </div>
    </li>
 
)};

export default TaskItem;
