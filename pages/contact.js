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
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (props) => {
    const contactFormBtn = document.getElementById("contact-form-btn");
    contactFormBtn.classList.add("disable-click");
    sending();
    props["to"] = "enquiries@bendando.com";
    props["website"] = "bendando.com";
    const response = await fetch(
      "https://sendgridcsharp.azurewebsites.net/api/sendemail",
      {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(props),
      }
    );
    try {
      let bodyresponse = await response.json();
      if (
        response.status === 200 &&
        bodyresponse.message != null &&
        bodyresponse.message == "Email Sent"
      ) {
        responseSuccess();
      } else {
        responseError();
      }
    } catch (err) {
      responseError();
    }
  };

  function sending() {
    const feedback = document.getElementById("feedback");
    let feedbackText = document.getElementById("feedback-text");
    feedback.classList.add("pop-down");
    feedbackText.classList.add("fade-in");
    setTimeout(function () {
      feedback.classList.remove("pop-down");
      feedbackText.classList.add("fade-out");
      feedback.classList.add("pop-up");
    }, 1500);
    setTimeout(function () {
      feedback.classList.remove("pop-up");
      feedbackText.classList.remove("fade-out", "fade-in");
    }, 2500);
  }

  function responseSuccess() {
    setTimeout(function () {
      const contactFormBtn = document.getElementById("contact-form-btn");
      const response = document.getElementById("response");
      let responseText = document.getElementById("response-text");
      response.classList.add("pop-down", "message-sent");
      responseText.classList.add("fade-in");
      responseText.innerHTML = `Message Sent Successfully <i class="fas fa-check ms-2"></i>`;
      contactFormBtn.classList.remove("disable-click");
    }, 2500);
  }

  function responseError() {
    setTimeout(function () {
      const contactFormBtn = document.getElementById("contact-form-btn");
      const response = document.getElementById("response");
      let responseText = document.getElementById("response-text");
      response.classList.add("pop-down", "message-error");
      responseText.classList.add("fade-in");
      responseText.innerHTML = `Error - Please Try Again <i class="fas fa-undo ms-2"></i>`;
      contactFormBtn.classList.remove("disable-click");
    }, 2500);
  }
  return (
    <div className="connect">
      <Head>
        <title>Contact | BenDando</title>
      </Head>
      <Navbar />
      <div className="landing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6" data-aos="zoom-in">
              <h1 className="mb-4" style={{paddingBottom: '20px'}}>Contact</h1>
              <h5 className="mb-2">
                We love talking about website and applications, we do it all day!
              </h5>
              <h5 className="mb-4">
                Give us a call or drop us an email we will get right back to
                you.
              </h5>
              <ul>
                <li>
                  <i className="far fa-envelope me-3"  style={{paddingTop: '10px'}}></i>enquiries@bendando.com
                </li>
                <li>
                  <i className="fas fa-phone me-3"  style={{paddingTop: '10px'}}></i>020 8543 8117
                </li>
                <li className="mt-4">
                  <ul>
                    
                    <li><i className="far fa-address-card me-3" ></i>Location</li>
                    
                    <li style={{paddingTop: '10px'}}>Unit 6</li>
                    <li>Princess Mews Horace Road</li>
                    <li>Kingston-upon-Thames</li>
                    <li>Surrey</li>
                    <li>KT1 2SZ</li>
                  </ul>
                </li>
              </ul>
              {/* <h5>Follow Us</h5>
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
              </div> */}
            </div>
            <div className="col-md-5" data-aos="zoom-in" data-aos-delay="250">
              {
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
                          <div className="error-validation">
                            *{errors.email}
                          </div>
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
                      <div id="feedback">
                        <p id="feedback-text">Sending...</p>
                      </div>
                      <div id="response">
                        <p id="response-text"></p>
                      </div>
                      <div className="text-center">
                        <button
                          className="global-btn btn mt-4 px-5"
                          type="submit"
                          id="contact-form-btn"
                        >
                          Send
                          <span className="mt_load">
                            <span></span>
                          </span>
                        </button>
                      </div>
                      <div id="msg"></div>
                    </Form>
                  )}
                </Formik>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}