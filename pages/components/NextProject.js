import React from "react";
import Link from "next/link";

const NextProject = ({ project, url }) => {
  return (
    <div className="project-end ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Next Project</h5>
            <h2>{project}</h2>
            <Link href={url}>
              <a>
                <button type="button" className="btn global-btn">
                  View Next Project
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextProject;
