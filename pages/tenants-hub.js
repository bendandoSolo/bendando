// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

// Next
import Head from "next/head";

export default function tenanthub() {
  let features = [
    "Web application and app design and creation",
    "Saas sign up website",
    "Automated service for logging and managing building faults",
    "White label application",
    "Payment system",
    "User Accounts and management",
    "Database of faults and associated pictures",
    "Automatic email and SMS notification service",
    "Automatic progress reports",
    "Real time messaging service",
    "Calendar Management integrated with Google Calendar",
    "Customized pluggins for individual clients",
  ];

  return (
    <>
      <Head>
        <title>Tenants Hub | BenDando</title>
        <meta
          name="description"
          content="A Property Management app used to connect Block and Letting Managers, Owners, Surveyors, Maintenance Personnel and Residents. It's built for your tenants to manage all their building related needs, maintenance personnel to manage their work and building managers and owners to manage all your building services."
        />
      </Head>
      <div className="tenants-hub">
        <Navbar bgColor="tenants-hub" />
        <ProjectBanner
          title="Tenants Hub"
          type="App & Website Build"
          text="  A Property Management app used to connect Block and Letting
                Managers, Owners, Surveyors, Maintenance Personnel and
                Residents. It's built for your tenants to manage all their
                building related needs, maintenance personnel to manage their
                work and building managers and owners to manage all your
                building services."
          img="/images/tenant-hub/mockup.png"
        />
        <div className="project-content">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 text-center">
                <img
                  data-aos="fade-up"
                  className="project-desktop"
                  src="/images/tenant-hub/desktop-screenshot.png"
                />
              </div>
              <div className="col-md-6 text-center">
                <img
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="project-mobile"
                  src="/images/tenant-hub/mobile-screenshot.png"
                />
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <h2 className="my-5 text-center">Features</h2>
              <div className="col-md-5">
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[0]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[1]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[2]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[3]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[4]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[5]}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[6]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[7]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[8]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[9]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[10]}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-sm-1">
                    <i className="fas fa-chevron-right hover me-2"></i>
                  </div>
                  <div className="col-sm-10">
                    <p>{features[11]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ViewSite url="https://www.tenantshub.co.uk/" cName="tenants-hub" />
          <Carousel
            p1={CarouselData.winAFlat}
            p2={CarouselData.greenAcre}
            p3={CarouselData.malcolmWall}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
