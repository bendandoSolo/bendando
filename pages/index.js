// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="landing">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <h1 className="mb-4">
                We build beautiful websites and applications with web services.
              </h1>
              <h5 className="mb-4">Check out the services that we offer.</h5>
              <div>
                <Link href="/services">
                  <a>
                    <button type="button" className="btn" id="home-btn">
                      View Our Services
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="scroller">
                <div className="scroller-img">
                  <img className="landing-img" src="/images/greenacre.png" />
                  <div className="mask"></div>
                </div>
                <div className="scroller-img">
                  <img className="landing-img" src="/images/malcolm-wall.png" />{" "}
                  <div className="mask"></div>
                </div>
                <div className="scroller-img">
                  <img className="landing-img" src="/images/win-a-flat.png" />{" "}
                  <div className="mask"></div>
                </div>
                <div className="scroller-img">
                  <img className="landing-img" src="/images/greenacre.png" />{" "}
                  <div className="mask"></div>
                </div>
                <div className="scroller-img">
                  <img className="landing-img" src="/images/malcolm-wall.png" />{" "}
                  <div className="mask"></div>
                </div>
                <div className="scroller-img">
                  <img className="landing-img" src="/images/win-a-flat.png" />{" "}
                  <div className="mask"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
