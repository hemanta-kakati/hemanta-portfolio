import React, { useState } from "react";
import items from "./portfolio-data";
import Masonry from "react-masonry-css";
const ProjectList = ({ projects }) => {
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    576: 1,
  };
  return (
    <div className="projects-list row justify-content-center">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((item) => {
          const { id, img, title, tags, info, url, repo } = item;
          return (
            <div key={id} className="card project mb-4">
              <div className="card-head">
                <img className="card-img-top img-fluid" src={img} alt={title} />
                <div className="project-links">
                  <button className="links-btn">
                    <a href={url} target="__blank">
                      Live Site
                    </a>
                  </button>
                  <button className="links-btn">
                    <a href={repo} target="__blank">
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{info}</p>

                <div className="tags">
                  {tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};

export default ProjectList;
