// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

export default function Connect() {
  return (
    <div className="connect">
      <Head>
        <title>Connect | BenDando</title>
      </Head>
      <Navbar />
      <div className="landing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6" data-aos="zoom-in">
              <h1 className="mb-4">Connect</h1>
              <h5 className="mb-4">
                We love talking about website solutions, we do it all day!
              </h5>
              <p>
                Give us a call or drop us an email we will get right back to
                you.
              </p>
              <ul>
                <li>
                  <i className="far fa-envelope me-3"></i>Enquires@bendando.com
                </li>
                <li>
                  <i className="fas fa-phone me-3"></i>Phone: 0208 946 8865
                </li>
                <li className="mt-4">
                  <ul>
                    <i className="far fa-address-card me-3"></i>
                    <li>Bendando Ltd</li>
                    <li>Princess Mews Horace Road</li>
                    <li>Kingston-upon-Thames</li>
                    <li>Surrey</li>
                    <li>KT1 2SZ</li>
                  </ul>
                </li>
              </ul>
              <h5>Follow Us</h5>
              <div className="connect-links">
                <Link href="/">
                  <a>
                    <i className="fab fa-linkedin-in me-3"></i>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <i className="fab fa-instagram me-3"></i>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <i className="fab fa-twitter me-3"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-5" data-aos="zoom-in" data-aos-delay="250">
              <form className="my-4 connect-form">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form4Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form4Example1">
                    Name
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form4Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form4Example2">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <textarea
                    className="form-control"
                    id="form4Example3"
                    rows="4"
                  ></textarea>
                  <label className="form-label" htmlFor="form4Example3">
                    Message
                  </label>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn global-btn mb-4 px-5">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
