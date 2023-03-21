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
      style={{ width: "100%", height: "80px" }}
    >
      <div className={`container-fluid ${bgColor}`}>
        <Link href="/">
          <a className="navbar-brand ms-2">
            <img style={{ width: "100%" }} src="/images/logo.png" alt="bendando logo" />
          </a>
        </Link>

        <button id="nav-btn-toggle" onClick={toggle}>
          <i aria-label="Menu" className={navToggle ? "fas fa-times" : "fas fa-bars"}></i>
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
