import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  const DeleteHandler = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <h2 className="list-title">Task Assignment</h2>
      <ul className="list">
  {tasks.map((task, id) => (
  <TaskItem
  key={id}
  task={task}
  onDelete={() => DeleteHandler(id)}
  />
   ))}
      </ul>
    </div>
  );
};

export default TaskList;
