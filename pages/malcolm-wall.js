// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

// Next
import Link from "next/link";

export default function malcolmWall() {
  let features = [
    "Website design and creation",
    "Rss Media News Feeds",
    "Clean simple design optimized for fast page loading",
    "Customized animated scrolling for news feeds on home page",
  ];

  return (
    <div className="malcolm-wall">
      <Navbar bgColor="transparent" />
      <ProjectBanner
        title="Malcolm Wall Media"
        type="Website Build"
        text="Malcolm wall is a giant in the media industry a truely charming
              client and a pleasure to work with. As CEO for Virgin Media,
              Pinewood and involved with various Media companies around the
              world, he required an online resume for attracting potential
              partners."
        img="/images/malcolm-wall/mockup.png"
      />
      <div className="project-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <img
                data-aos="fade-up"
                className="project-desktop mb-5"
                src="/images/malcolm-wall/desktop-screenshot.png"
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
                src="/images/malcolm-wall/mobile-screenshot.png"
              />
            </div>
          </div>
        </div>
        <ViewSite url="https://malcolmwallmedia.co.uk/" cName="malcolm-wall" />
        <Carousel
          p1={CarouselData.tenantHub}
          p2={CarouselData.winAFlat}
          p3={CarouselData.greenAcre}
        />
      </div>
      <Footer />
    </div>
  );
}
