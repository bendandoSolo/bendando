// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectBanner from "./components/ProjectBanner";

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
      <Navbar />
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
        <div className="row text-center py-4 project-link malcolm-wall">
          <a href="https://malcolmwallmedia.co.uk/" target="_blank">
            <h3>View site</h3>
          </a>
        </div>
        <div className="project-end">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5>Next Project</h5>
                <h2>Tenants Hub</h2>
                <Link href="/tenants-hub">
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
