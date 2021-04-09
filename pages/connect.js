// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Next
import Head from "next/head";
import Link from "next/link";

// Imports
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Connect() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      //  .min(2, 'Too Short!')
      //  .max(50, 'Too Long!')
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  const sendEmail = async (props) => {
    props["to"] = "enquiries@bendando.com";
    props["website"] = "bendando.co.uk";
    const response = await fetch(
      "https://sendgridcontactform.azurewebsites.net/api/SendGrid_ContactFormEmail",
      {
        method: "POST",
        cors: "*",
        contentType: "application/json",
        body: JSON.stringify(props),
      }
    );
    // Functions added here to create animation
    if (response.status != 200) {
      alert("Error");
    } else {
      alert("Success");
    }
  };

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
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  sendEmail(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact_form" className="my-4 connect-form">
                    <div className="mb-4">
                      <label>Name:</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-input"
                      />
                      {errors.name && touched.name ? (
                        <div className="error-validation">*{errors.name}</div>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label>Email:</label>
                      <Field
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="form-input"
                      />
                      {errors.email && touched.email ? (
                        <div className="error-validation">*{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label>Message:</label>
                      <Field
                        type="textarea"
                        as="textarea"
                        name="message"
                        type="message"
                        id="message"
                        placeholder="Your Message"
                        cols="30"
                        rows="5"
                        className="form-input"
                      />
                      {errors.message && touched.message ? (
                        <div className="error-validation">
                          *{errors.message}
                        </div>
                      ) : null}
                    </div>
                    <div id="feedback" className="feedback">
                      <h5 id="feedback-text"></h5>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn global-btn mb-4 px-5"
                      >
                        Send
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
