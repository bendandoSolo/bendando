import React from "react";

// Next
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="container">
        <div className="row p-4 justify-content-between">
          <div className="col-md-3">
            <h5>Menu</h5>
            <ul>
              <li>
                <Link href="/" style={{ color: "#ffffff" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Projects</h5>
            <ul>
              <li>
                <Link href="/">Tenants Hub</Link>
              </li>
              <li>
                <Link href="/projects">Win A Flat</Link>
              </li>
              <li>
                <Link href="/services">Malcolm Wall</Link>
              </li>
              <li>
                <Link href="/contact">Green Acre</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-links">
            <h5>Connect</h5>
            <ul>
              <li>
                <Link href="mailto:enquiries@bendando.com">
                  <a>
                    <i className="far fa-envelope me-3"></i>
                    enquiries@bendando.com
                  </a>
                </Link>
              </li>
              <li>
                <Link href="tel:+4402089468865">
                  <a>
                    <i className="fas fa-phone me-3"></i>020 8543 8117
                  </a>
                </Link>
              </li>
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
