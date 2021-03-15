import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    let menu = document.getElementById("menu");
    let prompt = document.getElementById("prompt");

    let hovered = false;
    let clicked = false;

    menu.addEventListener("mouseover", () => {
      hovered = true;
      if (hovered) {
        prompt.style.cssText =
          "animation: prompt-hover 0.6s; animation-fill-mode: both;";
        form.style.cssText =
          "animation: fade-in 0.8s; animation-fill-mode: both; animation-delay: 0.8s; display: block;";
      }
    });

    menu.addEventListener("click", () => {
      hovered = false;
      prompt.style.cssText =
        "animation: prompt-hover-out 0.8s; animation-fill-mode: both; animation-delay: 0.2s;";
      form.style.cssText =
        "animation: fade-out 0.8s; animation-fill-mode: both; ";
    });

    return () => {};
  }, []);

  return (
    <>
      <i id="menu" className="fas fa-envelope"></i>
      <div id="prompt">
        <div id="form">
          <h3 className="my-4" id="prompt-title">
            Contact Us
          </h3>
          <form>
            <div className="form-outline my-4">
              <input type="text" id="form4Example1" className="form-control" />
              <label className="form-label" htmlFor="form4Example1">
                Hi, my name is...
              </label>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form4Example2" className="form-control" />
              <label className="form-label" htmlFor="form4Example2">
                My email is...
              </label>
            </div>
            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form4Example3"
                rows="4"
              ></textarea>
              <label className="form-label" htmlFor="form4Example3">
                I wanted to know...
              </label>
            </div>
            <button type="submit" className="btn global-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
