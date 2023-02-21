// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

import Head from "next/head";

import { useState } from "react";

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

  const [loading, setLoading] = useState(true);

  const hideSpinner = () => {
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Win A Flat | BenDando</title>
        <meta
          name="title"
          content="Winaflat | Win a flat with Uri Geller and Equinox Living"
        />
        <meta
          name="description"
          content="A competition website for Equinox Living promoted by Uri Geller and the national press allowing UK residents who successfully answer 3 questions to be entered into a prize draw to win a brand new flat!"
        />
        <meta
          name="keywords"
          content="competition, website ,Equinox Living, Uri Geller, national, UK, residents, prize, win ,flat"
        />
      </Head>
      <div className="winaflat">
        <Navbar bgColor="winaflat" />
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
              <div className="col-md-6 text-center">
                <img
                  data-aos="fade-up"
                  className="project-desktop mb-5"
                  src="/images/winaflat/desktop-screenshot.png"
                  alt="Win A Flat desktop protoype"
                />
              </div>
              <div className="col-md-6 text-center">
                <img
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="project-mobile"
                  src="/images/winaflat/mobile-screenshot.png"
                  alt="Win A Flat mobile protoype"
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
              <div className="col-md-4">
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
              </div>
            </div>
            <div className="row pb-5 align-items-center">
              <div
                className="col-md-12 text-center position-relative my-4 rsvp-wrapper d-flex justify-content-center align-items-center"
                style={{ height: "600px", width: "100%" }}
              >
                <div className="iframe">
                  <iframe
                    src="https://samvirtualdemo.azurewebsites.net//"
                    height="600px"
                    width="90%"
                    title="Iframe Example"
                    onLoad={hideSpinner}
                  ></iframe>
                </div>

                {loading ? (
                  <>
                    <div className="spinner">
                      <img
                        id="spin-logo"
                        src="images/logo.png"
                        alt="loading spinner"
                      />
                      <h3>Loading...</h3>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="row justify-content-evenly mb-5">
              <div className="col-md-5 position-relative">
                <div className="project-text">
                  <p>
                    Winaflat was fully optimized to load as quickly as possible
                    for the wide variety of devices and users.
                  </p>
                  <p>
                    With heavy use of analytics we analysed and modified the
                    website to reach the largest audience.
                  </p>
                  <p>
                    Containers a Panorama viewer allowing users to move round
                    the interior of the flat to really get a feel for the prize.
                  </p>
                </div>
              </div>
              <div className="col-md-5 position-relative">
                <div className="project-text">
                  <p>
                    We used an ecommerce system accepting card and android and
                    apple pay to make the process as seamless as possible with a
                    custom database storing user details.
                  </p>
                  <p>
                    We also created random selection software for the prize draw
                    to be live streamed from the website when Uri Geller
                    announces the winner.
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
    </>
  );
}
