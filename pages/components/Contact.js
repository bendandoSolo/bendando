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
      <i id="menu" class="fas fa-envelope"></i>
      <div id="prompt">
        <div id="form">
          <h3 className="my-4" id="prompt-title">
            Contact Us
          </h3>
          <form>
            <div class="form-outline my-4">
              <input type="text" id="form4Example1" class="form-control" />
              <label class="form-label" for="form4Example1">
                Hi, my name is...
              </label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" />
              <label class="form-label" for="form4Example2">
                My email is...
              </label>
            </div>

            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form4Example3"
                rows="4"
              ></textarea>
              <label class="form-label" for="form4Example3">
                I wanted to know...
              </label>
            </div>

            <button type="submit" class="btn btn-primary mb-4" id="global-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
