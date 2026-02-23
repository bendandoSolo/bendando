import React from "react";
import Link from "next/link";

const ViewSite = ({ url, cName }) => {
  return (
    <div className={cName}>
      <div className="row text-center py-4 project-link">
        <Link href={url} target="_blank">
          <h3>View site</h3>
        </Link>
      </div>
    </div>
  );
};

export default ViewSite;
