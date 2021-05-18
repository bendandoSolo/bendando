// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from "../components/Navbar";
import ProjectPane from "../components/ProjectPane";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Home | BenDando</title>
      </Head>
      <Navbar />
      <div className="landing">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5 me-4" data-aos="zoom-in">
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
              <div className="row scroll-option" id="ourprojects">
                <div className="col-md-12">
                  <h5 className="my-4">Scroll to view our Projects</h5>
                </div>
                <div className="scroll-point col-md-12">
                  <a href="#ourprojects">
                    <i className="fas fa-chevron-down fa-3x hover text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="index-projects-display">
          <div className="test-display">
            <ProjectPane
              title="Tenants Hub"
              type="App &#183; Website &#183; Database"
              img="images/thub.jpg"
              bgColor="tenants-hub"
              url="/tenants-hub"
            />
            <ProjectPane
              title="Win A Flat"
              type="Website &#183; Database &#183; Payments"
              img="images/wflat.jpg"
              bgColor="winaflat"
              url="/win-a-flat"
            />
            <ProjectPane
              title="Green Acre"
              type="Website &#183; Branding"
              img="images/gacre.jpg"
              bgColor="green-acre"
              url="/green-acre"
            />
            <ProjectPane
              title="Malcolm Wall"
              type="Website &#183; Branding &#183; Media Feeds"
              img="images/mwall.jpg"
              bgColor="malcolm-wall"
              url="/malcolm-wall"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
