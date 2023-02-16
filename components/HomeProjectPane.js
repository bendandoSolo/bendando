import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Img from "./Img";

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
          <Img
            src={imageURL}
            alt="This is a description of the following image"
            lazy
            className={""}
            fill
            hgt="50vh"
          />
          <div className="panel-overlay">
            <h2>{projectName}</h2>
            <h5 style={{ color: "#00E7B6" }}>{projectType}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeProjectPane;
