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
        <meta
          name="title"
          content="Bendando | Projects"
        />
        <meta
          name="description"
          content="We create websites and apps using the most modern technology. Ensuring our clients stand out from the crowd and connect with people in a meaningful way."
        />
         <meta
          name="keywords"
          content="build, create, websites,apps, modern, technology"
          />
      </Head>
      <Navbar bgColor="project" />
      <div style={{ paddingTop: "80px" }}>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <ProjectPane
              title="Tenants Hub"
              type="App &#183; Website &#183; Database"
              img="images/screenshots/2.jpg"
              bgColor="tenants-hub"
              url="/projects/tenants-hub"
              style={{ height: "45vh" }}
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <ProjectPane
              title="Win A Flat"
              type="Website &#183; Database &#183; Payments"
              img="images/screenshots/1.jpg"
              bgColor="winaflat"
              url="/projects/win-a-flat"
              style={{ height: "45vh" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <ProjectPane
              title="Green Acre"
              type="Website &#183; Branding"
              img="images/screenshots/3.jpg"
              bgColor="green-acre"
              url="/projects/green-acre"
              style={{ height: "45vh" }}
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <ProjectPane
              title="Malcolm Wall"
              type="Website &#183; Branding &#183; Media Feeds"
              img="images/screenshots/4.jpg"
              bgColor="malcolm-wall"
              url="/projects/malcolm-wall"
              style={{ height: "45vh" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
