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
          "animation: prompt-hover 1s; animation-fill-mode: both;";
        form.style.cssText =
          "animation: fade-in 1s; animation-fill-mode: both; animation-delay: 1s; display: block;";
      }
      console.log(hovered);
    });

    menu.addEventListener("click", () => {
      console.log("click");
      hovered = false;
      prompt.style.cssText =
        "animation: prompt-hover-out 1s; animation-fill-mode: both; animation-delay: 1s;";
      form.style.cssText =
        "animation: fade-out 1s; animation-fill-mode: both; display: none;";
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
                Name
              </label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" />
              <label class="form-label" for="form4Example2">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form4Example3"
                rows="4"
              ></textarea>
              <label class="form-label" for="form4Example3">
                Message
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
