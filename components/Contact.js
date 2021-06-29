import { useState } from "react";

const Contact = () => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  function clickPrompt() {
    setClickCount(1);
    setClick(!click);
    console.log(click);
  }

  function hoverPrompt() {
    setHover(true);
    if (click) {
      setTimeout(() => {
        setHover(false);
      }, 2000);
    }
  }

  return (
    <>
      <div
        className="prompt-btn"
        onMouseEnter={hoverPrompt}
        onClick={clickPrompt}
      >
        <i class="fas fa-envelope"></i>
      </div>
      <div className={hover ? "prompt active" : "prompt"}>Contact Us</div>
      <div
        className={
          clickCount == 0
            ? "prompt-form"
            : clickCount > 0 && click
            ? "prompt-form prompt-animate-open"
            : "prompt-form prompt-animate-close"
        }
      >
        <div
          className={
            clickCount > 0 && click
              ? "prompt-body fade-in"
              : "prompt-body fade-out"
          }
        >
          <label htmlFor="name">Name:</label>
          <input type="text" />
          <label htmlFor="name">Email:</label>
          <input type="text" />
          <label htmlFor="name">Number:</label>
          <input type="text" />
          <label htmlFor="name">Message:</label>
          <textarea name="" id="" cols="30" rows="7"></textarea>
          <button className="global-btn btn" type="submit">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
