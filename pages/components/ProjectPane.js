import React from "react";
import Link from "next/link";

const ProjectPane = ({ title, type, img, bgColor, url }) => {
  return (
    <Link href={url}>
      <div class="project-pane">
        <img class="project-img" src={img} />
        <div class={`project-des ${bgColor}`}>
          <h5>{title}</h5>
          <p>{type}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPane;
