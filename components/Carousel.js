import React from "react";
import Link from "next/link";

const Carousel = ({ p1, p2, p3 }) => {
  return (
    <div
      id="carouselBasicExample"
      className="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <div className="carousel-indicators d-none">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className={`${p1.cName} active`}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <h2>{p1.name}</h2>
                <h5>{p1.type}</h5>
                <Link href={p1.url}>
                  <a>
                    <button type="button" className="global-btn btn mt-3">
                      <b>View This Project</b>
                    </button>
                  </a>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src={p1.img}
                  style={{ height: "40vh", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={p2.cName}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <h2>{p2.name}</h2>
                <h5>{p2.type}</h5>
                <Link href={p2.url}>
                  <a>
                    <button type="button" className="global-btn btn mt-3">
                      <b>View This Project</b>
                    </button>
                  </a>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src={p2.img}
                  style={{ height: "40vh", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={p3.cName}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <h2>{p3.name}</h2>
                <h5>{p3.type}</h5>
                <Link href={p3.url}>
                  <a>
                    <button type="button" className="global-btn btn mt-3">
                      <b>View This Project</b>
                    </button>
                  </a>
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  src={p3.img}
                  style={{ height: "40vh", marginTop: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
