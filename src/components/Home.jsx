import React, { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const Home = () => {
  const storedCategory = localStorage.getItem("selectedCategory") || "General";
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(storedCategory);

  useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(tasksFromStorage);
  }, [selectedCategory]);

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
  };

  const updateCategory = (newCategory) => {
    localStorage.setItem("selectedCategory", newCategory);
    setSelectedCategory(newCategory);
  };

  return (
    <div className="container">
      <CategoryList
        updateTasks={updateTasks}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        updateCategory={updateCategory}
      />
      <AddTask updateTasks={updateTasks} />
      <TaskList tasks={tasks} updateTasks={updateTasks} />
    </div>
  );
};

export default Home;
