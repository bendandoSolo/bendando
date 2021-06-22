// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { ServiceData } from "../components/ServiceData";
import { useEffect } from "react";

// Next
import Head from "next/head";
import Link from "next/link";

export default function Services() {
  useEffect(() => {
    function handleResize() {
      let serviceBoxArr = document.querySelectorAll(".service-card");
      let largestBoxHeight = 0;
      serviceBoxArr.forEach(function (element) {
        element.style.height = "auto";
        largestBoxHeight = Math.max(largestBoxHeight, element.offsetHeight);
      });
      serviceBoxArr.forEach(function (value) {
        value.style.height = largestBoxHeight + "px";
        // console.log(value.style.height);
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="services">
      <Head>
        <title>Services | BenDando</title>
        <meta
          name="title"
          content="Bendando | Services, Digital Design, Websites and Apps"
        />
        <meta
         name="keywords"
          content="We offer Digital Design Services, Website Development, App Development, SEO, Ecommerce, Digital Marketing, CRM and Customer Data Collection"
        />
        <meta
          name="description"
          content="digital, design, services, website, development, app, SEO, scommerce, marketing, CRM, customer, data, collection"
          />
      </Head>
      <Navbar bgColor="services" />
      <div className="landing">
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            data-aos="zoom-in"
          >
            <div className="text-center" style={{ maxWidth: "800px" }}>
              <h1 className="mb-4">Our Services</h1>
              <h5
                className="mb-2"
                style={{ lineHeight: "1.6em", paddingBottom: "24px" }}
              >
                We understand all projects are different, and technology is
                changing all the time. We pride ourselves on being ahead of the
                game and keeping up to date with the latest software trends.
                Whatever your requirements and budget we can offer you a
                solution that will suit your needs.
              </h5>
              <Link href="/connect">
                <a className="mb-5">
                  <button type="button" className="btn mb-5 global-btn">
                    Get in Touch
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "whitesmoke" }}>
          <div className="container">
            <div className="py-4 row">
              {ServiceData.map((item) => {
                return (
                  <ServiceCard
                    key={item.index}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
