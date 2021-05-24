// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

// Next
import Head from "next/head";
import Link from "next/link";

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
    <div className="tenants-hub">
      <Navbar bgColor="transparent" />
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
            <div className="col-md-6">
              <img
                data-aos="fade-up"
                className="project-desktop mb-5"
                src="/images/tenant-hub/desktop-screenshot.png"
              />
              <h2>Features</h2>
              <ul className="mb-5 features">
                {features.map((item) => {
                  return (
                    <li className="mt-5 d-flex align-items-center">
                      <i className="fas fa-chevron-right me-4 hover"></i>
                      <h5>{item}</h5>
                    </li>
                  );
                })}
              </ul>
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
  );
}
