// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectBanner from "../../components/ProjectBanner";
import ViewSite from "../../components/ViewSite";
import Carousel from "../../components/Carousel";
import { CarouselData } from "../../components/CarouselData";

// Next
import Head from "next/head";

export default function malcolmWall() {
  let features = [
    "Website design and creation",
    "Rss Media News Feeds",
    "Clean simple design optimized for fast page loading",
    "Customized animated scrolling for news feeds on home page",
  ];

  return (
    <>
      <Head>
        <title>Malcolm Wall | BenDando</title>
        <meta
          name="title"
          content="Malcolm Wall | Malcolm Wall Media Website"
        />
         <meta
         name="description"
          content="Malcolm Wall Media Website, designed by Pretty Clever Studios, build by Bendando."
          />
        <meta
           name="keywords"
          content="Malcolm, Wall,media, industry, CEO, Virgin Media, Pinewood, companiesworld"
        />
      </Head>
      <div className="malcolm-wall">
        <Navbar bgColor="malcolm-wall" />
        <ProjectBanner
          title="Malcolm Wall Media"
          type="Website Build"
          text="Malcolm Wall is a giant in the media industry a truly charming
              client and a pleasure to work with. As CEO for Virgin Media,
              Pinewood and involved with various Media companies around the
              world, he required an online resume for attracting potential
              partners."
          img="/images/malcolm-wall/mockup.png"
        />
        <div className="project-content">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 text-center">
                <img
                  data-aos="fade-up"
                  className="project-desktop mb-5"
                  src="/images/malcolm-wall/desktop-screenshot.png"
                />
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
          <ViewSite
            url="https://malcolmwallmedia.co.uk/"
            cName="malcolm-wall"
          />
          <Carousel
            p1={CarouselData.tenantHub}
            p2={CarouselData.winAFlat}
            p3={CarouselData.greenAcre}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
