/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AddTask = ({ updateTasks }) => {
  const [task, setTask] = useState({
    name: "",
    isDone: false,
    category: "General",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.name.trim() !== "") {
      try {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const currentCategory =
          localStorage.getItem("selectedCategory") || "General";
        task.category = currentCategory;
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setTask((prevTask) => ({
          ...prevTask,
          name: "",
          isDone: false,
          category: "General",
        }));
        updateTasks(tasks);
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
    }
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <button type="submit" className="add-button">
        +
      </button>
    </form>
  );
};

export default AddTask;
