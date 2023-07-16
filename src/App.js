import React, { useState } from "react";
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskForm";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(id, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1 className="headline-title">To-Do-List</h1>
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList tasks={tasks} onDelete={handleTaskDelete} />
    </div>
  );
};
export default App;
