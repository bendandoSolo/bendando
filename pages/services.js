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
    let boxHeight = 0;
    let boxes = Array.from(document.querySelectorAll(".service-card"));
    boxes.map((box) => {
      if (box.offsetHeight > boxHeight) {
        boxHeight = box.offsetHeight;
        box.style.cssText = `height: ${boxHeight}`;
      }
    });
    console.log(boxHeight);
  }, []);

  return (
    <div className="services">
      <Head>
        <title>Services | BenDando</title>
      </Head>
      <Navbar />
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
