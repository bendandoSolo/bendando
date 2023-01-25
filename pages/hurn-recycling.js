// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

import Head from "next/head";

const hurnRecycling = () => {
  return (
    <>
      <Head>
        <title>Hurn Recycling | BenDando</title>
        <meta name="title" content="Hurn Recycling | Hurn Recycling Website" />
        <meta
          name="description"
          content="Hurn Recycling is a family run business in Dorset, approached us to revamp their
          existing website in late 2021. Hurn Recycling are truly passionate about protecting the natural
          beauty of South West England and Dorset and it has been a pleasure to support a company whose
          values we share."
        />
        <meta
          name="keywords"
          content="Hurn, Recycling, family, Dorset, Environment, South, South West, England, Protecting"
        />
      </Head>
      <div className="hurn-recycling">
        <Navbar bgColor="hurn-recycling" />
        <ProjectBanner
          title="Hurn Recycling"
          type="Website Build"
          text="The nice people at Hurn Recycling, a family run business in Dorset, approached us to revamp their
          existing website in late 2021. Hurn Recycling are truly passionate about protecting the natural
          beauty of South West England and Dorset and it has been a pleasure to support a company whose
          values we share."
          img="/images/malcolm-wall/mockup.png"
        />
        <div className="project-content">
          <div className="container">
            <div className="project-grid">
              <div className="project-grid-item">
                <img
                  data-aos="fade-up"
                  className=""
                  src="/images/malcolm-wall/desktop-screenshot.png"
                />
              </div>
              <div className="project-grid-item">
                <img
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className=""
                  src="/images/malcolm-wall/mobile-screenshot.png"
                />
              </div>
              <div className="project-grid-item">
                <p>
                  We completed redesigned their existing website and built their
                  new website using Next.js (a modern JavaScript framework)
                  which pre-renders pages for the very fast loading speeds. Page
                  speed is a key factor in Google rankings with at 20% increase
                  in speed translating to a 10% improvement in Google Rankings,
                  and improves the user experience. In 2021, Google announced
                  the page experience algorithm update, demonstrating that page
                  speed and user experience are intertwined. Core Web Vitals
                  clearly state that speed is an essential ranking factor. The
                  update also gave site owners metrics and standards to work
                  with.
                </p>
              </div>
              <div className="project-grid-item">
                <p>
                  By combining the use of a modern fast and enterprise level
                  system such as Next.js with and working with Hurn over 2022 to
                  refine, improve and update their website content in less than
                  a year Hurn Recycling is now on the{" "}
                  <a
                    href="https://www.google.com/search?q=recycling+bournemouth&amp;rlz=1C1RXQR_enGB1033GB1033&amp;biw=2048&amp;bih=1002&amp;sxsrf=AJOqlzWeRIR-lDkDWTXYH20e79zrj8LIBA%3A1674556218409&amp;ei=OrPPY6vSGIXcgQbSupyYDA&amp;oq=recycling+bour&amp;gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgoIABCABBAUEIcCMgsILhCABBDHARCvATIKCAAQgAQQFBCHAjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEA8yCAgAEBYQHhAPMgYIABAWEB4yBggAEBYQHjoKCAAQRxDWBBCwAzoICAAQsQMQkQI6BQgAEJECOggIABCABBCxAzoFCAAQgAQ6EAguEIAEEBQQhwIQxwEQrwE6BQgAEIYDSgQIQRgASgQIRhgAUI8OWIYiYIMoaARwAXgAgAFviAHCBJIBAzQuMpgBAKABAcgBCMABAQ&amp;sclient=gws-wiz-serp"
                    target="_blank"
                  >
                    first page in Google for Recycling in Bournemouth.
                  </a>
                </p>
                <p>
                  We are proud to have taken a website with zero domain
                  authority to the top of the local rankings without the need
                  for expensive advertising campaigns. It demonstrates how
                  effect our strategy has become.
                </p>
              </div>
            </div>
            <section className="section">
              <div className="grid grid-2">
                <div className="grid-item">
                  <h3>Hurn Recycling Quote From</h3>
                  <p>
                    As part of the website update we have designed a{" "}
                    <a
                      href="https://www.hurnrecycling.com/recycling-quote"
                      target="_blank"
                    >
                      custom instant quote
                    </a>{" "}
                    form wizard for users to be able to easily select the
                    recycling services that they desire and to be provided an
                    instant quote, with a copy of the quote being sent to their
                    email address.
                  </p>
                  <p>
                    Users select their postcode, the type of service they
                    desire, the type of bin or collection service that is
                    required and the frequency of the service. They are then
                    provided with a full breakdown of the service costs,
                    viewable over weekly, monthly and annual time periods. We
                    are looking forward to seeing the impact of the quote form
                    on the website’s search rankings.
                  </p>
                </div>
                <div className="grid-item">PLACEHOLDER IMAGE OF FORM</div>
              </div>
            </section>
          </div>
        </div>
        <ViewSite url="https://www.hurnrecycling.com/" cName="hurn-recycling" />
        <Carousel
          p1={CarouselData.tenantHub}
          p2={CarouselData.winAFlat}
          p3={CarouselData.greenAcre}
        />
        <Footer />
      </div>
    </>
  );
};

export default hurnRecycling;
