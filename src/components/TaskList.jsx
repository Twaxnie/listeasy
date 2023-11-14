/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, updateTasks }) => {
  const currentCategory = localStorage.getItem("selectedCategory") || "General";
  const isCategoryAbsent = tasks.every(
    (task) => task.category !== currentCategory
  );
  if (!tasks || tasks.length === 0 || isCategoryAbsent) {
    return null;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) =>
        task.category === currentCategory ? (
          <Task key={task.name} task={task} updateTasks={updateTasks} />
        ) : null
      )}
    </ul>
  );
};

export default TaskList;
