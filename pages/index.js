// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from "../components/Navbar";
import ProjectPane from "../components/ProjectPane";
import HomeProjectPane from "../components/HomeProjectPane";

// react
import { useState, useEffect, useCallback } from "react";

const Home = () => {
  const [panel1Pos, setPanel1Pos] = useState({ top: "0px", bottom: "0px" });
  const [panel2Pos, setPanel2Pos] = useState({ top: "0px", bottom: "0px" });
  const [panel3Pos, setPanel3Pos] = useState({ top: "0px", bottom: "0px" });
  const [panel4Pos, setPanel4Pos] = useState({ top: "0px", bottom: "0px" });

  //should call onresize
  useEffect(() => {
    function handleResize() {
      setPanel1Pos({
        top: -1 * Math.max(window.innerHeight / 2) + "px",
        bottom: 2 * Math.max(window.innerHeight / 2) + "px",
      });
      setPanel2Pos({
        top: "0px",
        bottom: Math.max(window.innerHeight / 2) + "px",
      });
      setPanel3Pos({
        top: Math.max(window.innerHeight / 2) + "px",
        bottom: "0px",
      });
      setPanel4Pos({
        top: Math.max((window.innerHeight / 2) * 2) + "px",
        bottom: Math.max(-window.innerHeight / 2) + "px",
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mouseWheelEvent = (e) => {
    //infinite scrolling
    if (e.deltaY < 0) {
      if (
        parseInt(panel1Pos.bottom.substring(0, panel1Pos.bottom.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel1Pos({
          top:
            parseInt(panel1Pos.top.substring(0, panel1Pos.top.length - 2)) +
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel1Pos.bottom.substring(0, panel1Pos.bottom.length - 2)
            ) -
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel1Pos({
          top:
            parseInt(panel1Pos.top.substring(0, panel1Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel1Pos.bottom.substring(0, panel1Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }
      if (
        parseInt(panel2Pos.bottom.substring(0, panel2Pos.bottom.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel2Pos({
          top:
            parseInt(panel2Pos.top.substring(0, panel2Pos.top.length - 2)) +
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel2Pos.bottom.substring(0, panel2Pos.bottom.length - 2)
            ) -
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel2Pos({
          top:
            parseInt(panel2Pos.top.substring(0, panel2Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel2Pos.bottom.substring(0, panel2Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }
      if (
        parseInt(panel3Pos.bottom.substring(0, panel3Pos.bottom.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel3Pos({
          top:
            parseInt(panel3Pos.top.substring(0, panel3Pos.top.length - 2)) +
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel3Pos.bottom.substring(0, panel3Pos.bottom.length - 2)
            ) -
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel3Pos({
          top:
            parseInt(panel3Pos.top.substring(0, panel3Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel3Pos.bottom.substring(0, panel3Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }
      if (
        parseInt(panel4Pos.bottom.substring(0, panel4Pos.bottom.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel4Pos({
          top:
            parseInt(panel4Pos.top.substring(0, panel4Pos.top.length - 2)) +
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel4Pos.bottom.substring(0, panel4Pos.bottom.length - 2)
            ) -
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel4Pos({
          top:
            parseInt(panel4Pos.top.substring(0, panel4Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel4Pos.bottom.substring(0, panel4Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }
    } else {
      if (
        parseInt(panel1Pos.top.substring(0, panel1Pos.top.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel1Pos({
          top:
            parseInt(panel1Pos.top.substring(0, panel1Pos.top.length - 2)) -
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel1Pos.bottom.substring(0, panel1Pos.bottom.length - 2)
            ) +
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel1Pos({
          top:
            parseInt(panel1Pos.top.substring(0, panel1Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel1Pos.bottom.substring(0, panel1Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }
      if (
        parseInt(panel2Pos.top.substring(0, panel2Pos.top.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel2Pos({
          top:
            parseInt(panel2Pos.top.substring(0, panel2Pos.top.length - 2)) -
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel2Pos.bottom.substring(0, panel2Pos.bottom.length - 2)
            ) +
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel2Pos({
          top:
            parseInt(panel2Pos.top.substring(0, panel2Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel2Pos.bottom.substring(0, panel2Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }

      if (
        parseInt(panel3Pos.top.substring(0, panel3Pos.top.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel3Pos({
          top:
            parseInt(panel3Pos.top.substring(0, panel3Pos.top.length - 2)) -
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel3Pos.bottom.substring(0, panel3Pos.bottom.length - 2)
            ) +
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel3Pos({
          top:
            parseInt(panel3Pos.top.substring(0, panel3Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel3Pos.bottom.substring(0, panel3Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }

      if (
        parseInt(panel4Pos.top.substring(0, panel4Pos.top.length - 2)) >=
        2.5 * Math.max(window.innerHeight / 2)
      ) {
        setPanel4Pos({
          top:
            parseInt(panel4Pos.top.substring(0, panel4Pos.top.length - 2)) -
            Math.max((window.innerHeight / 2) * 4) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel4Pos.bottom.substring(0, panel4Pos.bottom.length - 2)
            ) +
            Math.max((window.innerHeight / 2) * 4) -
            e.deltaY +
            "px",
        });
      } else {
        setPanel4Pos({
          top:
            parseInt(panel4Pos.top.substring(0, panel4Pos.top.length - 2)) +
            e.deltaY +
            "px",
          bottom:
            parseInt(
              panel4Pos.bottom.substring(0, panel4Pos.bottom.length - 2)
            ) -
            e.deltaY +
            "px",
        });
      }
    }
  };

  return (
    <div className="home" onWheel={mouseWheelEvent}>
      <Head>
        <title>Home | BenDando</title>
      </Head>
      <Navbar bgColor="#15313d" />
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
        <div
          className="col-md-6 testing-project-display"
          style={{ overflow: "hidden", zIndex: 2 }}
        >
          <HomeProjectPane
            projectName="Malcolm Wall"
            projectType="Website - Branding - Media Feeds"
            position={panel1Pos}
            imageURL="images/screenshots/4.jpg"
            backgroundImage={"url('images/screenshots/4.jpg')"}
            link="/malcolm-wall"
          >
            {/* <img src="images/screenshots/1.jpg" /> */}
          </HomeProjectPane>

          <HomeProjectPane
            projectName="Tenants Hub"
            projectType="App - Website - Database"
            position={panel2Pos}
            imageURL="images/screenshots/2.jpg"
            backgroundImage={"url('images/screenshots/2.jpg')"}
            link="/tenants-hub"
          />
          <HomeProjectPane
            projectName="Win A Flat"
            projectType="Website - Database - Payments"
            position={panel3Pos}
            imageURL="images/screenshots/1.jpg"
            backgroundImage={"url('images/screenshots/1.jpg')"}
            link="/win-a-flat"
          />
          <HomeProjectPane
            projectName="Green Acre"
            projectType="Website - Branding"
            position={panel4Pos}
            imageURL="images/screenshots/3.jpg"
            backgroundImage={"url('images/screenshots/3.jpg')"}
            link="/green-acre"
          />
          {/* <div className="box" id="img-1" style={{backgroundColor: '#ff00ff'}}>
            <img src="images/screenshots/1.jpg" />
          </div>
          <div className="box"  style={{backgroundColor: '#ff0000'}}>
            <img src="images/screenshots/2.jpg" />
          </div>
          <div className="box" id="img-3" style={{backgroundColor: '#ff00ff'}}>
            <img src="images/screenshots/3.jpg" />
          </div>
          <div className="box" id="img-4" style={{backgroundColor: '#ffff00'}}>
            <img src="images/screenshots/4.jpg" /> 
          </div> */}
        </div>
        <div className="mobile-display">
          <ProjectPane
            title="Tenants Hub"
            type="App &#183; Website &#183; Database"
            img="images/screenshots/2.jpg"
            bgColor="tenants-hub"
            url="/tenants-hub"
            style={{ height: "45vh" }}
          />
          <ProjectPane
            title="Win A Flat"
            type="Website &#183; Database &#183; Payments"
            img="images/screenshots/1.jpg"
            bgColor="winaflat"
            url="/win-a-flat"
            style={{ height: "45vh" }}
          />
          <ProjectPane
            title="Green Acre"
            type="Website &#183; Branding"
            img="images/screenshots/3.jpg"
            bgColor="green-acre"
            url="/green-acre"
            style={{ height: "45vh" }}
          />
          <ProjectPane
            title="Malcolm Wall"
            type="Website &#183; Branding &#183; Media Feeds"
            img="images/screenshots/4.jpg"
            bgColor="malcolm-wall"
            url="/malcolm-wall"
            style={{ height: "45vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
