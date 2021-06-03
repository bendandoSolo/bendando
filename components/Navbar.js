// Next
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ bgColor }) {
  const [navToggle, setNavToggle] = useState(false);

  const toggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#15313d", width: "100%", height: "80px" }}
    >
      <div className="container-fluid" style={{ backgroundColor: "#15313d" }}>
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
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
