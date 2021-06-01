import React from "react";

const ProjectBanner = ({ title, type, text, img }) => {
  return (
    <div className="landing-2">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-5">
            <h1 className="mb-4">{title}</h1>
            <h4 className="mb-4">{type}</h4>
            <h5 className="mb-4">{text}</h5>
          </div>
          <div className="col-md-6">
            <img
              data-aos="fade-up"
              data-aos-duration="500"
              className="landing-img mb-5"
              src={img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
