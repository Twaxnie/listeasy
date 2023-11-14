/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, updateTasks }) => {
  const [isDone, setIsDone] = useState(task.isDone || false);
  const [localIsDone, setLocalIsDone] = useState(task.isDone || false);

  useEffect(() => {
    if (localIsDone !== isDone) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = tasks.map((t) => {
        if (t.name === task.name) {
          return { ...t, isDone };
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      updateTasks(updatedTasks);
      setLocalIsDone(isDone);
    }
  }, [isDone, localIsDone, task.name, updateTasks]);

  const handleCheckboxChange = () => {
    setIsDone(!isDone);
  };

  const handleDelete = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTasks = tasks.filter((t) => t.name !== task.name);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    updateTasks(newTasks);
  };

  return (
    <li className={`task ${isDone ? "completed" : ""}`}>
      <div className="left-section">
        <input
          type="checkbox"
          id={`checkbox-${task.name}`}
          checked={isDone}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor={`checkbox-${task.name}`}
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {task.name}
        </label>
      </div>
      <div className="right-section">
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
};

export default Task;
