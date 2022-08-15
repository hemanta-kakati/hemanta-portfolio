import React from "react";
import categoriesData from "./tech-data";
const FilterCategories = ({ categories, setCurrentCat, currentCat }) => {
  const handleCategories = (catName) => {
    const { name } = categoriesData.filter((item) => item.name === catName)[0];
    setCurrentCat(name);
  };

  return (
    <div className="filter-projects">
      <div className="head">
        <h4 className="text-center mb-0">Filter</h4>
      </div>
      <ul className="tech-container ml-0">
        {categories.map((cat) => (
          <li>
            <button
              className={`button ${currentCat === cat.name && "active"}`}
              onClick={() => handleCategories(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategories;
