// Next
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const toggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand ms-2">
            <img className="landing-img" src="/images/logo.png" />
          </a>
        </Link>

        <button id="nav-btn-toggle" onClick={toggle}>
          <i className={navToggle ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <div className={navToggle ? "test-nav-items active" : "test-nav-items"}>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/projects">
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a className="nav-link">Services</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
