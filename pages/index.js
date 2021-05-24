// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from "../components/Navbar";
import ProjectPane from "../components/ProjectPane";

// react
import { useState, useEffect } from "react";

export default function Home() {
  let total = 0;

  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    let screenHeight = window.innerHeight;
    setScreenSize(screenHeight);
  }, []);

  return (
    <div
      className="home"
      onWheel={(e) => {
        let boxes = Array.from(document.querySelectorAll(".box"));
        if (e.deltaY > 0) {
          boxes.map((box) => {
            box.style.cssText = `top: ${box.offsetTop + 40}px`;
            if (box.offsetTop > window.innerHeight + box.offsetHeight) {
              box.style.cssText = `top: -${box.offsetHeight}px;`;
              console.log("up");
            }
          });
        } else {
          boxes.map((box) => {
            box.style.cssText = `top: ${box.offsetTop - 40}px`;
            console.log(box.offsetTop);
            if (box.offsetTop < 0 - box.offsetHeight) {
              box.style.cssText = `top: ${
                window.innerHeight + box.offsetHeight
              }px;`;
            }
          });
        }
      }}
      style={{ overflow: "hidden" }}
    >
      <Head>
        <title>Home | BenDando</title>
      </Head>
      <Navbar />
      <div className="landing">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5" data-aos="zoom-in">
              <h1 className="mb-4">We Build Beautiful Websites and Apps</h1>
              <div>
                <Link href="/services">
                  <a>
                    <button type="button" className="global-btn btn">
                      <b>View Our Services</b>
                    </button>
                  </a>
                </Link>
              </div>
              <div className="d-flex scroll-option" id="ourprojects">
                <h5 className="my-4">Scroll to view our projects</h5>
                <a href="#ourprojects">
                  <i
                    className="fas fa-mouse scroll-point"
                    style={{ color: "#00E7B6", fontSize: "2rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 testing-project-display">
          <div className="box" id="img-1">
            <img src="images/screenshots/1.jpg" />
          </div>
          <div className="box" id="img-2">
            <img src="images/screenshots/2.jpg" />
          </div>
          <div className="box" id="img-3">
            <img src="images/screenshots/3.jpg" />
          </div>
          <div className="box" id="img-4">
            <img src="images/screenshots/4.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
