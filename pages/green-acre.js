// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectBanner from "./components/ProjectBanner";
import ViewSite from "./components/ViewSite";
import Carousel from "./components/Carousel";
import { CarouselData } from "./components/CarouselData";

// Next
import Link from "next/link";

export default function greenAcre() {
  let features = [
    "Website design and creation",
    "Company Branding",
    "Complete wireframe and website mockups",
    "Fully responsive",
    "Video banner on homepage",
  ];

  return (
    <div className="green-acre">
      <Navbar />
      <ProjectBanner
        title="Greenacre Capital"
        type="Website and Branding"
        text="  Greenacre Energy is a company whose mission is to identify and
                invest in environmentally sustainable solutions for the disposal
                of all waste. They work alongside governments and experts across
                the UK and South East Asia. They approached us to brand their
                organisation and design their website."
        img="/images/green-acre/mockup.png"
      />
      <div className="project-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <img
                data-aos="fade-up"
                className="project-desktop mb-5"
                src="/images/green-acre/desktop-screenshot.png"
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
                src="/images/green-acre/mobile-screenshot.png"
              />
            </div>
          </div>
          <div className="row pb-5 align-items-center reverse mt-5">
            <div className="col-md-6 text-center">
              <img
                className="project-mobile mb-4"
                src="/images/green-acre/screenshot-1.png"
              />
            </div>
            <div className="col-md-6 position-relative">
              <div className="project-text mx-3">
                <p>
                  Greenacre Capital brand needed to reflect their position as a
                  global company investing in environmentally sustainable
                  projects.
                </p>
                <p>
                  Greenacre capital approached us to brand their organisation
                  and design their website. Particular attention to detail was
                  required in order for the brands neeed to appeal to high net
                  worth individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ViewSite url="/" cName="green-acre" />
        <Carousel
          p1={CarouselData.malcolmWall}
          p2={CarouselData.tenantHub}
          p3={CarouselData.winAFlat}
        />
      </div>
      <Footer />
    </div>
  );
}
