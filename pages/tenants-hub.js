// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function tenanthub() {
  return (
    <div className="tenants-hub">
      <Navbar />
      <div className="landing-2">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <h1 className="mb-4">Tenants Hub</h1>
              <h4 className="mb-4">App & Website Build</h4>
              <h5 className="mb-4">
                This is a Property Management app used to connect Block and
                Letting Managers, Owners, Surveyors, Maintenance Personnel and
                Residents. It's built for your tenants to manage all their
                building related needs, your maintenance personnel to manage
                their work and to manage all your building services.
              </h5>
            </div>
            <div className="col-md-6">
              <img
                className="landing-img mb-5"
                src="/images/winaflat/mockup.png"
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
                src="/images/tenant-hub/desktop-screenshot.png"
              />
            </div>
            <div className="col-md-6 text-center">
              <img
                className="project-mobile"
                src="/images/tenant-hub/mobile-screenshot.png"
              />
            </div>
          </div>
        </div>
        <div className="row text-center py-4 project-link">
          <Link href="https://www.tenantshub.co.uk/">
            <a>
              <h3>View site</h3>
            </a>
          </Link>
        </div>
        <div className="project-end tenants-hub">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Next Project</h5>
                <h2>Win A Flat</h2>
                <Link href="/win-a-flat">
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
