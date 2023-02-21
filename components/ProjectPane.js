import React from "react";
import Link from "next/link";

const ProjectPane = ({ title, type, img, bgColor, url }) => {
  return (
    <Link href={url}>
      <div className="project-pane">
        <img
          className="project-img"
          src={img}
          alt={`${title} prototype background`}
        />
        <div className="panel-overlay" style={{ zIndex: 0 }}>
          <h2>{title}</h2>
          <h3 style={{ color: "#00E7B6", fontSize: "16px" }}>{type}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPane;
