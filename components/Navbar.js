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
          <a className="navbar-brand ms-2" aria-label="Homepage Logo Link">
            <img
              src="/images/logo.png"
              alt="Bendando brand logo"
              width="48px"
              height="48px"
            />
          </a>
        </Link>

        <button
          id="nav-btn-toggle"
          onClick={toggle}
          aria-label="Nav Toggle Button"
        >
          <i className={navToggle ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={navToggle ? "test-nav-items active" : "test-nav-items"}>
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
    </nav>
  );
}
