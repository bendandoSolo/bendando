import React from "react";
import Link from "next/link";

const ProjectPane = ({ title, type, img, bgColor, url }) => {
  return (
    <Link href={url}>
      <div className="project-pane">
        <img className="project-img" src={img} />
        <div className="panel-overlay" style={{ zIndex: 0 }}>
          <h2>{title}</h2>
          <h5 style={{ color: "#00E7B6" }}>{type}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPane;
