/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const Category = ({
  selectedCategory,
  setSelectedCategory,
  name,
  updateTasks,
}) => {
  const handleCategoryClick = (category) => {
    try {
      localStorage.setItem("selectedCategory", category);
      setSelectedCategory(category);
    } catch (error) {
      console.error("Error updating local storage:", error);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("selectedCategory", selectedCategory);
    } catch (error) {
      console.error("Error updating local storage:", error);
    }
  }, [selectedCategory]);

  return (
    <button
      className={`category-button ${selectedCategory === name ? "active" : ""}`}
      onClick={() => handleCategoryClick(name)}
    >
      {name}
    </button>
  );
};

export default Category;
