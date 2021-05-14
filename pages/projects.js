// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectPane from "../components/ProjectPane";
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
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <ProjectPane
            title="Tenants Hub"
            type="App &#183; Website &#183; Database"
            img="images/tenanthub.jpg"
            bgColor="tenants-hub"
            url="/tenants-hub"
            style={{ height: "45vh" }}
          />
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <ProjectPane
            title="Win A Flat"
            type="Website &#183; Database &#183; Payments"
            img="images/win-a-flat.jpg"
            bgColor="winaflat"
            url="/win-a-flat"
            style={{ height: "45vh" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <ProjectPane
            title="Green Acre"
            type="Website &#183; Branding"
            img="images/greenacre.jpg"
            bgColor="green-acre"
            url="/green-acre"
            style={{ height: "45vh" }}
          />
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <ProjectPane
            title="Malcolm Wall"
            type="Website &#183; Branding &#183; Media Feeds"
            img="images/malcolm-wall.jpg"
            bgColor="malcolm-wall"
            url="/malcolm-wall"
            style={{ height: "45vh" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
