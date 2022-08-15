import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FilterCategories from "./FilterCategories";
import ProjectList from "./ProjectList";
import { useEffect, useState } from "react";
import categoriesData from "./tech-data";
import items from "./portfolio-data";

function App() {
  const [categories, setCategories] = useState(categoriesData);
  const [projects, setProjects] = useState(items);
  const [currentCat, setCurrentCat] = useState("React");

  useEffect(() => {
    const newProjects = items.filter((item) => item.tech === currentCat);
    setProjects(newProjects);
  }, [currentCat]);

  return (
    <div className="container">
      <section id="portfolio">
        <h3 className="text-center mb-4">Projects</h3>
        <div className="row">
          <div className="col-md-2">
            <FilterCategories
              categories={categories}
              currentCat={currentCat}
              setCurrentCat={setCurrentCat}
            />
          </div>
          <div className="col-md-10">
            <ProjectList projects={projects} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
