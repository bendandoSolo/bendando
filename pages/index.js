// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from "../components/Navbar";
import ProjectPane from "../components/ProjectPane";

export default function Home() {
  let total = 0;

  return (
    <div
      className="home"
      onWheel={(e) => {
        let boxes = Array.from(document.querySelectorAll(".box"));
        console.log(boxes);
        if (e.deltaY > 0) {
          total += 20;
        } else {
          total -= 20;
        }
        boxes.map((box) => (box.style.cssText = `top: ${total}px`));
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
                <h5 className="my-4 me-4">Scroll to view our projects</h5>
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
        <div className="testing-project-display">
          <div className="box" id="red"></div>
          <div className="box" id="blue"></div>
          <div className="box" id="purple"></div>
        </div>
        {/* <div className="index-projects-display">
          <div className="test-display">
            <ProjectPane
              title="Tenants Hub"
              type="App &#183; Website &#183; Database"
              img="images/screenshots/2.jpg"
              bgColor="tenants-hub"
              url="/tenants-hub"
            />
            <ProjectPane
              title="Win A Flat"
              type="Website &#183; Database &#183; Payments"
              img="images/screenshots/1.jpg"
              bgColor="winaflat"
              url="/win-a-flat"
            />
            <ProjectPane
              title="Green Acre"
              type="Website &#183; Branding"
              img="images/screenshots/3.jpg"
              bgColor="green-acre"
              url="/green-acre"
            />
            <ProjectPane
              title="Malcolm Wall"
              type="Website &#183; Branding &#183; Media Feeds"
              img="images/screenshots/4.jpg"
              bgColor="malcolm-wall"
              url="/malcolm-wall"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
