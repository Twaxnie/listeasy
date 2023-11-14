/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Category from "./Category";

const CategoryList = ({
  updateTasks,
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = [
    { name: "General" },
    { name: "Today" },
    { name: "Week" },
    { name: "Important" },
  ];

  return (
    <div className="categories">
      <div className="categories-container">
        {categories.map((category) => (
          <Category
            key={category.name}
            name={category.name}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            updateTasks={updateTasks}
            {...category}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
