// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectBanner from "../components/ProjectBanner";
import ViewSite from "../components/ViewSite";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";

import Head from "next/head";

const mexicanMama = () => {
  return (
    <>
      <Head>
        <title>Mexican Mama | BenDando</title>
        <meta name="title" content="Mexican Mama | Mexican Mama Website" />
        <meta
          name="description"
          content="Mexican Mama Website, migrated from Wordpress to Shopify, managed SEO."
        />
        <meta
          name="keywords"
          content="Hurn, Recycling, family, Dorset, Environment, South, South West, England, Protecting"
        />
      </Head>
      <div className="mexican-mama">
        <Navbar bgColor="mexican-mama" />
        <ProjectBanner
          title="Mexican Mama"
          type="Website Build"
          text="Mexican Mama approached us in early 2022 to help migrate their
          website from Wordpress to a more modern framework. Their
          existing ecommerce website was slow, dated clunky and
          sometimes missing orders. Wordpress using WooCommerce also
          does not cache users baskets if for some reason they exit the
          website before completing the sale."
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
                  We migrated their website to Shopify, which was a smooth and
                  seamless process, now Mexican Mama is one of the main
                  distributors of Mexican food in the Uk. We also helped them
                  improve their SEO and search rankings. Mexican Mama is now top
                  of the Google Rankings for most of their food products and
                  with our help they have also seen an increases in the walk in
                  customers to their store in Peckham.
                </p>
              </div>
            </div>
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

export default mexicanMama;
