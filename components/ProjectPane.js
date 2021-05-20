import React from "react";
import Link from "next/link";

const ProjectPane = ({ title, type, img, bgColor, url }) => {
  return (
    <Link href={url}>
      <div className="project-pane">
        <img className="project-img" src={img} />
      </div>
    </Link>
  );
};

export default ProjectPane;
