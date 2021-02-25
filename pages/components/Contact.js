import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    let state = false;

    let btn = document.getElementById("contact-btn");
    let form = document.getElementById("contact-form");
    let formInputs = document.querySelector("#contact-form form");

    btn.addEventListener("click", () => {
      state = !state;
      if (state === true) {
        form.style.cssText =
          "animation: animate 1s;  animation-fill-mode: both; right: 90px; height: 600px;";
        formInputs.classList.add("appear");
        console.log(formInputs);
      } else {
        form.style.cssText = "animation: animate-out 1s;";
        formInputs.classList.remove("appear");
      }
    });
    return () => {};
  }, []);

  return (
    <>
      <div id="contact-btn">
        <i className="far fa-envelope"></i>
      </div>
      <div id="contact-form">
        <div id="trial">
          <form className="my-5">
            <h2 className="mb-4">Contact Us</h2>
            <h5 className="mb-5">
              Drop us a message and we will get right back to you.
            </h5>
            <div className="form-outline mb-4">
              <input type="text" id="form4Example1" className="form-control" />
              <label className="form-label" htmlFor="form4Example1">
                Name
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="form4Example2" className="form-control" />
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

            <button type="submit" className="btn btn-block mb-4" id="home-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
