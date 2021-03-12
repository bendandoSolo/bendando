// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function greenAcre() {
  return (
    <div className="green-acre">
      <Navbar />
      <div className="landing-2">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <h1 className="mb-4">Greenacre Capital</h1>
              <h4 className="mb-4">Website and Branding</h4>
              <h5 className="mb-4">
                Greenacre Energy is a company whose mission is to identify and
                invest in environmentally sustainable solutions for the disposal
                of all waste. They work alongside governments and experts across
                the UK and South East Asia. They approached us to brand their
                organisation and design their website.
              </h5>
            </div>
            <div className="col-md-6">
              <img
                className="landing-img mb-5"
                src="/images/green-acre/mockup.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <img
                className="project-desktop mb-5"
                src="/images/green-acre/desktop-screenshot.png"
              />
              <h2>Features</h2>
              <ul className="mb-5">
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-chevron-right me-4 hover"></i>Website
                    design and creation
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-chevron-right me-4 hover"></i>
                    Company Branding
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-chevron-right me-4 hover"></i>
                    Complete wireframe and website mockups
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-chevron-right me-4 hover"></i>Fully
                    responsive
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-chevron-right me-4 hover"></i>
                    Video banner on homepage
                  </h5>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
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
        <div className="row text-center py-4 project-link">
          <a href="https://www.greenacre-capital.com/" target="_blank">
            <h3>View site</h3>
          </a>
        </div>
        <div className="project-end green-acre">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Next Project</h5>
                <h2>Malcolm Wall</h2>
                <Link href="/malcolm-wall">
                  <a>
                    <button type="button" className="btn global-btn">
                      View Next Project
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
