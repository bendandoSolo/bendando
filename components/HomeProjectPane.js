import React, { useEffect, useRef } from "react";
import Link from "next/link";

const HomeProjectPane = ({
  projectName,
  projectType,
  position,
  color,
  imageURL,
  backgroundImage,
  link,
}) => {
  return (
    <Link href={link}>
      <div
        className="desktop-infinite-scroll-panel"
        style={{
          width: "50vw",
          heigth: "100px",
          backgroundColor: color,
          top: position.top,
          bottom: position.bottom,
          position: "absolute",
          zIndex: 1000000,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
          <img
            src={imageURL}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt={`${projectName} prototype background`}
          />
          <div className="panel-overlay">
            <h2>{projectName}</h2>
            <h3 style={{ color: "#00E7B6" }}>{projectType}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeProjectPane;
