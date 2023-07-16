import React, { useState } from "react";
import './styles.css'

const TaskForm = ({ onTaskAdd }) => {
  const [task, setTask] = useState({
    name: '',
    date: '',
    description: '',
    priority: '',
  });

  const handleInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskAdd(task);
    setTask({
      name: '',
      date: '',
      description: '',
      priority: '',
    });
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input className='control-input'
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleInputChange}
      />
      <input className='control-input'
        type="date"
        name="date"
        value={task.date}
        onChange={handleInputChange}
      />
      <textarea className='control-input'
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleInputChange}
      />
      <select className='control-input'
        name="priority"
        value={task.priority}
        onChange={handleInputChange}
      >
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className='button' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;