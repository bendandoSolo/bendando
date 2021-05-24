// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

export default function winflat() {
  let features = [
    "Website design and creation",
    "Optimized for quicker loading times",
    "3D environmental viewer",
    "Payment System",
    "Apple / Android Pay",
    "Customer entries database and ticket creation",
    "Randomized winner selection software",
    "Analytics",
  ];

  return (
    <div className="winaflat">
      <Navbar bgColor="transparent" />
      <ProjectBanner
        title="Win A Flat"
        type="Website Build"
        text="A competition website for Equinox Living promoted by Uri Geller
              and the national press allowing UK residents who successfully
              answer 3 questions to be entered into a prize draw to win a brand
              new flat!"
        img="/images/winaflat/mockup.png"
      />
      <div className="project-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <img
                data-aos="fade-up"
                className="project-desktop mb-5"
                src="/images/winaflat/desktop-screenshot.png"
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
                src="/images/winaflat/mobile-screenshot.png"
              />
            </div>
          </div>
          <div className="row pb-5 align-items-center">
            <div className="col-md-6 text-center position-relative my-4">
              <iframe
                src="https://samvirtualdemo.azurewebsites.net//"
                height="500px"
                width="90%"
                title="Iframe Example"
              ></iframe>
            </div>
            <div className="col-md-6 position-relative">
              <div className="project-text mx-3">
                <p>
                  Winaflat was fully optimized to load as quickly as possible
                  for the wide variety of devices and users.
                </p>
                <p>
                  With heavy use of analytics we analysed and modified the
                  website to reach the largest audience.
                </p>
                <p>
                  Containers a Panorama viewer allowing users to move round the
                  interior of the flat to really get a feel for the prize.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5 align-items-center reverse">
            <div className="col-md-6">
              <img
                className="project-mobile mb-4"
                src="/images/winaflat/3D-flat.png"
              />
            </div>
            <div className="col-md-6 position-relative">
              <div className="project-text mx-3">
                <p>
                  We used an ecommerce system accepting card and android and
                  apple pay to make the process as seamless as possible with a
                  custom database storing user details.
                </p>
                <p>
                  We also created random selection software for the prize draw
                  to be live streamed from the website when Uri Geller announces
                  the winner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ViewSite
          url="http://winaflatdemo.azurewebsites.net/Home"
          cName="winaflat"
        />
        <Carousel
          p1={CarouselData.greenAcre}
          p2={CarouselData.malcolmWall}
          p3={CarouselData.tenantHub}
        />
      </div>
      <Footer />
    </div>
  );
}
