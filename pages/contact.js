import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Next
import Head from "next/head";
//import Link from "next/link";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Connect() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (emailData) => {
    const contactFormBtn = document.getElementById("contact-form-btn");
    contactFormBtn.classList.add("disable-click");
    sendingAnimation();

    emailData["to"] = "enquiries@bendando.com";
    emailData["website"] = "bendando.com";
    const response = await fetch(
          "https://sendgridcsharp.azurewebsites.net/api/sendemail",
            {
              method: "POST",
              contentType: "application/json",
              body: JSON.stringify(emailData),
            }
          );
          try {
                  let bodyresponse = await response.json();
                  if (
                    response.status === 200 &&
                    bodyresponse.message != null &&
                    bodyresponse.message == "Email Sent"
                  ) {
                    responseSuccessAnimation();
                  } else {
                    responseErrorAnimation();
                  }
                } catch (err) {
                  responseErrorAnimation();
            }
  };

  function sendingAnimation() {
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

  function responseSuccessAnimation() {
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

  function responseErrorAnimation() {
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
        <meta
          name="title"
          content="Bendando | Contact us"
        />
        <meta
          name="description"
          content="Get in touch by phone email or our contact form to discuss your next digital project"
        />
         <meta
          name="keywords"
          content="contact, websites, apps, digital marketing, solutions, email, phone"
          />
      </Head>
      <Navbar bgColor="connect" />
      <div className="landing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6" data-aos="zoom-in">
              <h1 className="mb-4" style={{ paddingBottom: "20px" }}>
                Contact
              </h1>
              <h5 className="mb-2">
                We love talking about websites, apps and other digital solutions, we do it all
                day!
              </h5>
              <h5 className="mb-4">
                Give us a call or drop us an email we will get right back to
                you.
              </h5>
              <ul>
                <li>
                  <a href="mailto:enquiries@bendando.com" className="link">
                    <i
                      className="far fa-envelope me-3"
                      style={{ paddingTop: "10px" }}
                    ></i>
                    enquiries@bendando.com
                  </a>
                </li>
                <li>
                
                  <a href="tel:+441217510180" className="link">
                    <i
                      className="fas fa-phone me-3"
                      style={{ paddingTop: "10px" }}
                    ></i>
                    +44 (0)121 751 0180
                  </a>
                </li>
                <li className="mt-4">
                  <ul>
                    <li>
                      <i className="far fa-address-card me-3"></i>Location
                    </li>

                    <li style={{ paddingTop: "10px" }}>Unit 6</li>
                    <li>Princess Mews Horace Road</li>
                    <li>Kingston-upon-Thames</li>
                    <li>Surrey</li>
                    <li>KT1 2SZ</li>
                  </ul>
                </li>
              </ul>
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
                        <Field
                          type="textarea"
                          as="textarea"
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          cols="30"
                          rows="10"
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
                      <div className="text-end">
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
