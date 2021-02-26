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
              <h1 className="mb-4">Green Acre</h1>
              <h4 className="mb-4">Website Build</h4>
              <h5 className="mb-4">
                Greenacre Energy is a company whose mission is to identify and
                invest in environmentally sustainable solutions for the disposal
                of all waste. They work alongside governments and experts across
                the UK and South East Asia.
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
                    <i className="fas fa-arrow-circle-right me-3"></i>Website
                    design and creation.
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Optimized
                    for quicker download times
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Fully
                    responsive
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Integrated
                    contact form
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
                  Winaflat was fully optimized to load as quickly as possible
                  for the wide variety of devices and users.
                </p>
                <p>
                  With heavy use of analytics we analysed and modified the
                  website to reach the largest audience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center py-4 project-link">
          <Link href="https://www.greenacre-capital.com/">
            <a>
              <h3>View site</h3>
            </a>
          </Link>
        </div>
        <div className="project-end green-acre">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Next Project</h5>
                <h2>Malcolm Wall</h2>
                <Link href="/malcolm-wall">
                  <a>
                    <button type="button" className="btn" id="global-btn">
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
