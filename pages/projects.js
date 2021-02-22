// Components
import Navbar from "./components/Navbar";
import Message from "./components/Message";

// Next
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="project">
      <Head>
        <title>Projects | BenDando</title>
      </Head>
      <Navbar />
      <Message />

      <div className="landing-2">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="mb-4">Our Projects</h1>
              <h5 className="mb-4">
                We use industry best practise technologies with bundling
                techniques to ensure that your website only sends the files that
                are required to ensure the best performance on all devices.
              </h5>
              <Link href="/win-a-flat">
                <a>
                  <button type="button" className="btn mb-5" id="home-btn">
                    View Our Last Project
                  </button>
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <img className="arrow" src="/images/arrow.png" />
            </div>
          </div>
        </div>
        <div className="project-display">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3 mb-5 text-center">
                <img className="mb-4" src="/images/win-a-flat.png" />
                <h3>Win A Flat</h3>
                <p>
                  A competition website for Equinox Living promoted by Uri
                  Geller and the national press allowing UK residents who
                  successfully answer 3 questions to be entered into a prize
                  draw to win a brand new flat!
                </p>
                <Link href="/win-a-flat">
                  <a>
                    <button type="button" className="btn mb-5" id="project-btn">
                      View This Project
                    </button>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 mb-5 text-center">
                <img className="mb-4" src="/images/greenacre.png" />
                <h3>Green Acre</h3>
                <p>
                  A competition website for Equinox Living promoted by Uri
                  Geller and the national press allowing UK residents who
                  successfully answer 3 questions to be entered into a prize
                  draw to win a brand new flat!
                </p>
                <Link href="/green-acre">
                  <a>
                    <button type="button" className="btn mb-5" id="project-btn">
                      View This Project
                    </button>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 mb-5 text-center">
                <img className="mb-4" src="/images/malcolm-wall.png" />
                <h3>Malcolm Wall</h3>
                <p>
                  A competition website for Equinox Living promoted by Uri
                  Geller and the national press allowing UK residents who
                  successfully answer 3 questions to be entered into a prize
                  draw to win a brand new flat!
                </p>
                <Link href="/malcolm-wall">
                  <a>
                    <button type="button" className="btn mb-5" id="project-btn">
                      View This Project
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-3 mb-5 text-center">
                <img className="mb-4" src="/images/tenanthub.png" />
                <h3>Tenants Hub</h3>
                <p>
                  A competition website for Equinox Living promoted by Uri
                  Geller and the national press allowing UK residents who
                  successfully answer 3 questions to be entered into a prize
                  draw to win a brand new flat!
                </p>
                <Link href="/win-a-flat">
                  <a>
                    <button type="button" className="btn mb-5" id="project-btn">
                      View This Project
                    </button>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 mb-5 text-center">
                <img className="mb-4" src="/images/win-a-flat.png" />
                <h3>Win A Flat</h3>
                <p>
                  A competition website for Equinox Living promoted by Uri
                  Geller and the national press allowing UK residents who
                  successfully answer 3 questions to be entered into a prize
                  draw to win a brand new flat!
                </p>
                <Link href="/win-a-flat">
                  <a>
                    <button type="button" className="btn mb-5" id="project-btn">
                      View This Project
                    </button>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 mb-5 text-center">
                <img className="mb-4" src="/images/win-a-flat.png" />
                <h3>Win A Flat</h3>
                <p>
                  A competition website for Equinox Living promoted by Uri
                  Geller and the national press allowing UK residents who
                  successfully answer 3 questions to be entered into a prize
                  draw to win a brand new flat!
                </p>
                <Link href="/win-a-flat">
                  <a>
                    <button type="button" className="btn mb-5" id="project-btn">
                      View This Project
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
