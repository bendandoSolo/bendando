// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="project">
      <Head>
        <title>Projects | BenDando</title>
      </Head>
      <Navbar />
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-5" data-aos="zoom-in">
              {/* <h1 className="my-5">Our Projects</h1> */}
              {/* <p>Check out some of our projects.</p> */}
            </div>
          </div>
        </div>
        <div className="project-display mt-3">
          <div className="row justify-content-evenly">
            <Link href="/tenants-hub">
              <div
                className="col-md-5 text-center project-section"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img className="project-image" src="/images/tenanthub.jpg" />
                <div className="test-project-info">
                  <h5>Tenants Hub</h5>
                  <p>App &#183; Website 	&#183; Database</p>
                </div>
              </div>
            </Link>
            <Link href="win-a-flat">
              <div
                className="col-md-5 text-center project-section"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img className="project-image" src="/images/win-a-flat.jpg" />
                <div className="test-project-info">
                  <h5>Win A Flat</h5>
                  <p>Website 	&#183; Database &#183; Payments</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="row justify-content-evenly">
            <Link href="green-acre">
              <div
                className="col-md-5 text-center project-section"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img className="project-image" src="/images/greenacre.jpg" />
                <div className="test-project-info">
                  <h5>Green Acre</h5>
                  <p>Website 	&#183; Branding</p>
                </div>
              </div>
            </Link>
            <Link href="/malcolm-wall">
              <div
                className="col-md-5 text-center project-section"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img className="project-image" src="/images/malcolm-wall.jpg" />
                <div className="test-project-info">
                  <h5>Malcolm Wall</h5>
                  <p>Website 	&#183; Branding &#183; Media Feeds</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
