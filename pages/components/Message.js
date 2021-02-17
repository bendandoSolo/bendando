import React from "react";

import Link from "next/link";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      hideMessage: true,
    };
    this.showComponent = this.showComponent.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
  }

  showComponent() {
    this.setState({ showMessage: true });
  }

  hideComponent() {
    this.setState({ showMessage: false });
  }

  render() {
    const { showMessage } = this.state;
    return (
      <div>
        <button className="mail" onClick={() => this.showComponent()}>
          <i className="far fa-envelope"></i>
        </button>
        {showMessage && (
          <div className="message">
            <button
              onClick={() => this.hideComponent()}
              className="close"
              id="close"
            >
              <i class="far fa-window-close"></i>
            </button>
            <div className="message-contact">
              <h2 className="mb-4">Contact Us</h2>
              <h5 className="mb-5">
                Drop us a message and we will get right back to you.
              </h5>
              <form className="mb-5">
                <div class="form-outline mb-4">
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

                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Send
                </button>
              </form>
            </div>
            <div className="row justify-content-between mb-5">
              <div className="col-md-3 text-center">
                <Link href="/">
                  <a>
                    <i className="fab fa-linkedin-in me-3"></i>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 text-center">
                <Link href="/">
                  <a>
                    <i className="fab fa-instagram me-3"></i>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 text-center">
                <Link href="/">
                  <a>
                    <i className="fab fa-twitter me-3"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Message;
