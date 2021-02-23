// Components
import Navbar from "./components/Navbar";
import Message from "./components/Message";

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
      <Message />

      <div className="landing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5">
              <h1 className="mb-4">Our Services</h1>
              <h5 className="mb-4">
                We use industry best practise technologies with bundling
                techniques to ensure that your website only sends the files that
                are required to ensure the best performance on all devices.
              </h5>
              <h5 className="mb-4">
                With increasing use of mobile you never know how fast your users
                can download data.
              </h5>
              <Link href="/win-a-flat">
                <a className="mb-5">
                  <button type="button" className="btn mb-5" id="home-btn">
                    View Our Last Project
                  </button>
                </a>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 p-3 service">
                  {/* <i className="fas fa-database mb-4"></i> */}
                  <h5 className="mb-4">
                    <i className="fas fa-database me-4 mb-4"></i>
                    DATA COLLECTION{" "}
                  </h5>
                  <p>
                    We build GDPR compliant databases or integrate with your own
                    to collect whatever information is required from your users.
                  </p>
                </div>
                <div className="col-md-6 p-3 service">
                  {/* <i className="fas fa-shopping-basket mb-4"></i> */}
                  <h5 className="mb-4">
                    <i className="fas fa-shopping-basket me-4 mb-4"></i>
                    E-COMMERCE{" "}
                  </h5>
                  <p>
                    In addition to credit card payments we allow your customers
                    to pay with one click using cards saving in browsers,
                    android pay and apple pay. Never has it been easier for
                    payments to be accepted.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 p-3 service">
                  {/* <i className="fas fa-search mb-4"></i> */}
                  <h5 className="mb-4">
                    <i className="fas fa-search me-4 mb-4"></i>
                    ANALYTICS
                  </h5>
                  <p>
                    We use a variety of tools to analyse who comes to your
                    website, how long they stay, what devices they use allowing
                    you customize the delivery of your message.
                  </p>
                </div>
                <div className="col-md-6 p-3 service">
                  {/* <i className="fab fa-adn mb-4"></i> */}
                  <h5 className="mb-4">
                    <i className="fab fa-adn me-4 mb-4"></i>
                    APP
                  </h5>
                  <p>
                    Want an app that links to your website, social media and
                    database? Talk to us too, it’s easier than you think.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
