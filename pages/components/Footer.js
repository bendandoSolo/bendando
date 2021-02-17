import React from "react";

// Next
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="container">
        <div className="row pt-4">
          <div className="col-md-3">
            <p>Privacy Policy ©Bendando</p>
          </div>
          <div className="col-md-3 footer-links">
            <h5>Connect</h5>
            <ul>
              <Link href="mailto:enquiries@bendando.com">
                <a>
                  <li>
                    <i className="far fa-envelope me-3"></i>
                    Enquires@bendando.com
                  </li>
                </a>
              </Link>
              <Link href="tel:+4402089468865">
                <a>
                  <li>
                    <i className="fas fa-phone me-3"></i>Phone: 0208 946 8865
                  </li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Location</h5>
            <ul>
              <li>Bendando Ltd</li>
              <li>8 Princess Mews Horace Road</li>
              <li>Kingston-upon-Thames</li>
              <li>Surrey</li>
              <li>KT1 2SZ</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
