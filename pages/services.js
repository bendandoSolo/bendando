// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function Services() {
  return (
    <div className="services">
      <Head>
        <title>Services | BenDando</title>
      </Head>
      <Navbar />
      <div className="landing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5" data-aos="zoom-in">
              <h1 className="mb-4">Our Services</h1>
              <h5 className="mb-4" style={{lineHeight: '1.6em', paddingBottom: '24px'}}>
                We understand all projects are different, and technology is changing all 
                the time. We pride ourselves on being ahead of the game and keeping up to 
                date with the latest software trends.
                Whatever your requirements and budget we can offer you a solution that will
                suit your needs.

              </h5>
             
              <Link href="/connect">
                <a className="mb-5">
                  <button type="button" className="btn mb-5 global-btn">
                    Get in Touch
                  </button>
                </a>
              </Link>
            </div>
            <div className="col-md-6" data-aos="zoom-in" data-aos-delay="250">
              <div className="row">

              <div className="col-md-6 p-3 service">
                  <i className="fas fa-database me-4 mb-4"></i>
                  <h5 className="mb-4">DIGITAL DESIGN SERVICES</h5>
                  <p>
                    Whether you have a small website that requires nothing more than a few 
                    alteration to a template to stand out or a larger website or application that
                    requires branding we have a solution for you.
                  </p>
                </div>

              <div className="col-md-6 p-3 service">
                  <i className="fas fa-database me-4 mb-4"></i>
                  <h5 className="mb-4">WEBSITE DEVELOPMENT </h5>
                  <p>
                    We use modern Javascript frameworks to deliver speed optimized 
                    websites vastly improving website load times and SEO 
                    without the need for pay for click or advertising.
                    Built it right from the start to stand out from your competitors.
                  </p>
                  <p>We do not use WordPress, Wixs or Squarespace.</p>
                </div>

                <div className="col-md-6 p-3 service">
                  <i className="fas fa-database me-4 mb-4"></i>
                  <h5 className="mb-4">APP DEVELOPMENT </h5>
                  <p>
                    With experience working for Microsoft, Vodaphone, the NHS, PWC and Fintech Startups
                    we have the skills to deliver an ontime on budget solution for whatever your needs.
                  </p>
                  <p>
                  Rather than hire us through an agency, come to us directly and we can deliver 
                    you product at a fraction of the price.
                  </p>
                </div>

                



               
                <div className="col-md-6 p-3 service">
                  <i className="fas fa-shopping-basket me-4 mb-4"></i>
                  <h5 className="mb-4">E-COMMERCE SOLUTIONS</h5>
                  <p>
                    We recommend customizing the Shopify Platform for most of our small 
                    clients, however can build you a complete Ecommerce solution should 
                    that be required.
                  </p>
                  <p>
                    In addition to credit card payments we allow your customers
                    to pay with one click,
                    android pay and apple pay and Crypto Currency. Never has it been easier for
                    payments to be accepted.
                  </p>
                </div>
                <div className="col-md-6 p-3 service">
                  <i className="fas fa-database me-4 mb-4"></i>
                  <h5 className="mb-4">DATA COLLECTION </h5>
                  <p>
                    We build GDPR compliant databases or integrate with your own
                    to collect whatever information is required from your users.
                  </p>
                  <p>
                  Recently we ran a lottery competition with Uri Gellar to win a flat.
                  Whatever you requirements we can provide a cost effective solution.
                  </p>
                </div>


              </div>
              <div className="row">
                <div className="col-md-6 p-3 service">
                  <i className="fas fa-tasks me-4 mb-4"></i>
                  <h5 className="mb-4">CRM Management</h5>
                  <p>
                   Coronavirus changed the world forever in 2020. With everyone moving online it is more vital than ever to 
                   keep in touch with your digital customers and potential clients than before.
                   Our CRM experts can help you quickly setup and manage you company CRM to facilite efficient 
                   communication and targeting of your most important clients and potential customers.
                  </p>
                </div>
                <div className="col-md-6 p-3 service">
                  <i className="fab fa-adn me-4 mb-4"></i>
                  <h5 className="mb-4">Search Engine Optimiztion</h5>
                  <p>
                    By building your website with us the right way, all our clients 
                    already are head and shoulders above the competition. SEO is changing
                    all the time but fortunately google keep us posted on these changes <a href="https://developers.google.com/search/blog" target="_blank">here 
                    </a>.
                  </p>
                  <p>
                    There is no one fix solution for SEO, as your competitors evolve so should you.
                    Providing valuable content, monitoring web traffic, competitor movement and making incremental improvements to your website and seeing the
                    effect of those alterations is the most cost effective way of improving your SEO.
                  </p>
                </div>
                <div className="col-md-6 p-3 service">
                  <i className="fab fa-adn me-4 mb-4"></i>
                  <h5 className="mb-4">Digital Marketing</h5>
                  <p>
                    PPC (pay per click) using google Adwords, combined with a Facebook and Instagram advertising campaigns 
                    can take your online presence to the next level.
                    By targeting your customer base, monitoring success and making iterative improvements we can boost your 
                    website traffic and customer engagement.
                  </p>
                </div>
              </div>

            

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
