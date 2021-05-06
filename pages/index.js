import { useEffect } from "react";

// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  // useEffect(() => {
  //   let doc = window.document,
  //     context = doc.querySelector(".scroller"),
  //     clones = context.querySelectorAll(".is-clone"),
  //     disableScroll = false,
  //     scrollHeight = 0,
  //     scrollPos = 0,
  //     clonesHeight = 0,
  //     i = 0;

  //   function getScrollPos() {
  //     return (
  //       (context.pageYOffset || context.scrollTop) - (context.clientTop || 0)
  //     );
  //   }

  //   // let scrollBtn = doc.getElementById("scroller-circle");

  //   // scrollBtn.addEventListener("click", () => {
  //   //   context.scrollBy(0, 400);
  //   // });

  //   function setScrollPos(pos) {
  //     context.scrollTop = pos;
  //   }

  //   function getClonesHeight() {
  //     clonesHeight = 0;

  //     for (i = 0; i < clones.length; i += 1) {
  //       clonesHeight = clonesHeight + clones[i].offsetHeight;
  //     }

  //     return clonesHeight;
  //   }

  //   function reCalc() {
  //     scrollPos = getScrollPos();
  //     scrollHeight = context.scrollHeight;
  //     clonesHeight = getClonesHeight();

  //     if (scrollPos <= 0) {
  //       setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  //     }
  //   }

  //   function scrollUpdate() {
  //     if (!disableScroll) {
  //       scrollPos = getScrollPos();

  //       if (clonesHeight + scrollPos >= scrollHeight) {
  //         // Scroll to the top when you’ve reached the bottom
  //         setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
  //         disableScroll = true;
  //       } else if (scrollPos <= 0) {
  //         // Scroll to the bottom when you reach the top
  //         setScrollPos(scrollHeight - clonesHeight);
  //         disableScroll = true;
  //       }
  //     }

  //     if (disableScroll) {
  //       // Disable scroll-jumping for a short time to avoid flickering
  //       window.setTimeout(function () {
  //         disableScroll = false;
  //       }, 40);
  //     }
  //   }

  //   function init() {
  //     reCalc();

  //     context.addEventListener(
  //       "scroll",
  //       function () {
  //         window.requestAnimationFrame(scrollUpdate);
  //       },
  //       false
  //     );

  //     window.addEventListener(
  //       "resize",
  //       function () {
  //         window.requestAnimationFrame(reCalc);
  //       },
  //       false
  //     );
  //   }

  //   if (document.readyState !== "loading") {
  //     init();
  //   } else {
  //     doc.addEventListener("DOMContentLoaded", init, false);
  //   }
  // });
  return (
    <div className="home">
      <Head>
        <title>Home | BenDando</title>
      </Head>
      <Navbar />
      <div className="landing">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5 me-4" data-aos="zoom-in">
              <h1 className="mb-4">We Build Beautiful Websites and Apps</h1>
              <div>
                <Link href="/services">
                  <a>
                    <button type="button" className="global-btn btn">
                      <b>View Our Services</b>
                    </button>
                  </a>
                </Link>
              </div>
              <div></div>
              <div className="row scroll-option">
                <div className="col-md-7">
                  <h5 className="my-4">Scroll to view our Projects</h5>
                </div>
                <div className="scroll-point col-md-3">
                  <a href="#ourprojects">
                    <i className="fas fa-chevron-down fa-3x hover text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ourprojects" className="index-projects-display">
          <div className="test-display">
            <Link href="/win-a-flat">
              <div id="win-a-flat" className="test-project-img">
                <div className="test-project-info">
                  <h5>Win-A-Flat</h5>
                  <p>Website Build</p>
                </div>
              </div>
            </Link>
            <Link href="/tenants-hub">
              <div id="tenant-hub" className="test-project-img">
                <div className="test-project-info">
                  <h5>Tenants Hub</h5>
                  <p>App Build</p>
                </div>
              </div>
            </Link>
            <Link href="/green-acre">
              <div id="green-acre" className="test-project-img">
                <div className="test-project-info">
                  <h5>Green Acre</h5>
                  <p>Website Build</p>
                </div>
              </div>
            </Link>
            <Link href="/malcolm-wall">
              <div id="malcolm-wall" className="test-project-img">
                <div className="test-project-info">
                  <h5>Malcolm Wall</h5>
                  <p>Website Build</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="scroller" id="scroller">
          <div className="mask"></div>
          <Link href="/win-a-flat">
            <div className="scroller-img">
              <img className="landing-img" src="/images/win-a-flat.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Win A Flat</h5>
                </div>
                <div className="project-type">App Build</div>
              </div>
            </div>
          </Link>
          <Link href="/tenants-hub">
            <div className="scroller-img">
              <img className="landing-img" src="/images/tenanthub.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Tenants Hub</h5>
                </div>
                <div className="project-type">App Build</div>
              </div>
            </div>
          </Link>
          <Link href="/green-acre">
            <div className="scroller-img">
              <img className="landing-img" src="/images/greenacre.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Green Acre</h5>
                </div>
                <div className="project-type">Website Build</div>
              </div>
            </div>
          </Link>
          <Link href="/malcolm-wall">
            <div className="scroller-img">
              <img className="landing-img" src="/images/malcolm-wall.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Malcolm Wall</h5>
                </div>
                <div className="project-type">Website Build</div>
              </div>
            </div>
          </Link>
          <Link href="/win-a-flat">
            <div className="scroller-img is-clone">
              <img className="landing-img" src="/images/win-a-flat.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Win A Flat</h5>
                </div>
                <div className="project-type">App Build</div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="scroller-img is-clone">
              <img className="landing-img" src="/images/tenanthub.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Tenants Hub</h5>
                </div>
                <div className="project-type">App Build</div>
              </div>
            </div>
          </Link>
          <Link href="/green-acre">
            <div className="scroller-img is-clone">
              <img className="landing-img" src="/images/greenacre.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Green Acre</h5>
                </div>
                <div className="project-type">Website Build</div>
              </div>
            </div>
          </Link>
          <Link href="/malcolm-wall">
            <div className="scroller-img is-clone">
              <img className="landing-img" src="/images/malcolm-wall.jpg" />
              <div className="project-info">
                <div className="project-title">
                  <h5>Malcolm Wall</h5>
                </div>
                <div className="project-type">Website Build</div>
              </div>
            </div>
          </Link>
        </div> */}

        {/* ONLY APPEARS ON MOBILE */}
        {/* <div id="grid" className="grid mt-5 pb-1">
          <div className="row">
            <Link href="/win-a-flat">
              <div className="mb-3">
                <img className="landing-img" src="/images/win-a-flat.png" />
                <div className="project-info">
                  <div className="project-title">
                    <h5>Win A Flat</h5>
                  </div>
                  <div className="project-type">App Build</div>
                </div>
              </div>
            </Link>
            <Link href="/tenants-hub">
              <div className="mb-3">
                <img className="landing-img" src="/images/tenanthub.png" />
                <div className="project-info">
                  <div className="project-title">
                    <h5>Tenants Hub</h5>
                  </div>
                  <div className="project-type">App Build</div>
                </div>
              </div>
            </Link>
            <Link href="/green-acre">
              <div className="mb-3">
                <img className="landing-img" src="/images/greenacre.png" />
                <div className="project-info">
                  <div className="project-title">
                    <h5>Green Acre</h5>
                  </div>
                  <div className="project-type">Website Build</div>
                </div>
              </div>
            </Link>
            <Link href="/malcolm-wall">
              <div className="mb-3">
                <img className="landing-img" src="/images/malcolm-wall.png" />
                <div className="project-info">
                  <div className="project-title">
                    <h5>Malcolm Wall</h5>
                  </div>
                  <div className="project-type">Website Build</div>
                </div>
              </div>
            </Link>
          </div>
        </div> */}
      </div>
    
    </div>
  );
}
