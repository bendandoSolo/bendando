// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

// Next
import Head from "next/head";

export default function greenAcre() {
  let features = [
    "Website design and creation",
    "Company Branding",
    "Complete wireframe and website mockups",
    "Fully responsive",
    "Video banner on homepage",
  ];

  return (
    <>
      <Head>
        <title>Green Acre | BenDando</title>
        <meta
          name="title"
          content="Greenacre Capital | Private Investment Company"
        />
         <meta
         name="description"
          content="Greenacre Capital Ltd is a private investment company working across three divisions: property, independent living and clean energy."
          />
        <meta
         name="keywords"
          content="Greenacre, Capital, private, investment, company,property, independent, living ,clean, energy."
        />
      </Head>
      <div className="green-acre">
        <Navbar bgColor="green-acre" />
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
              <div className="col-md-6 text-center">
                <img
                  data-aos="fade-up"
                  className="project-desktop"
                  src="/images/green-acre/desktop-screenshot.png"
                />
              </div>
              <div className="col-md-6 text-center mb-5">
                <img
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="project-mobile"
                  src="/images/green-acre/mobile-screenshot.png"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
            {/* <div className="row pb-5 align-items-center mt-5">
            <div className="col-md-6 position-relative">
              <div className="project-text">
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
          </div> */}
            <div className="row justify-content-center mb-5">
              <h2 className="my-5 text-center">Features</h2>
              <div className="col-md-4">
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
              </div>
              <div className="col-md-4">
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
    </>
  );
}
