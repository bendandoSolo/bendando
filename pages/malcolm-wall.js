// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function malcolmWall() {
  return (
    <div className="malcolm-wall">
      <Navbar />
      <div className="landing-2">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <h1 className="mb-4">Malcolm Wall</h1>
              <h4 className="mb-4">Website Build</h4>
              <h5 className="mb-4">
                Malcolm wall is a giant in the media industry a truly charming
                man and a pleasure to work with. As CEO for Virgin Media,
                Pinewood and involved with various Media companies around the
                world, he wanted an online resume for potential partners.
              </h5>
            </div>
            <div className="col-md-6">
              <img
                className="landing-img mb-5"
                src="/images/malcolm-wall/mockup.png"
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
                src="/images/malcolm-wall/desktop-screenshot.png"
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
                    <i className="fas fa-arrow-circle-right me-3"></i>3D
                    environmental viewer
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Ecommerce
                    System
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Apple /
                    Android Pay
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Customer
                    entries database
                  </h5>
                </li>
                <li className="mt-5">
                  <h5>
                    <i className="fas fa-arrow-circle-right me-3"></i>Analytics
                  </h5>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="project-mobile"
                src="/images/malcolm-wall/mobile-screenshot.png"
              />
            </div>
          </div>
        </div>
        <div className="row text-center py-4 project-link">
          <Link href="https://malcolmwallmedia.co.uk/">
            <a>
              <h3>View site</h3>
            </a>
          </Link>
        </div>
        <div className="project-end malcolm-wall">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Next Project</h5>
                <h2>Tenants Hub</h2>
                <Link href="/tenants-hub">
                  <a>
                    <button type="button" className="btn" id="home-btn">
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
