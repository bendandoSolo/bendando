import Head from "next/head";

export default function Home() {
  return (
    <div className="landing">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 my-y">
            <h1 className="mb-4">Hello World</h1>
            <h5 className="mb-4">
              Navbar navigation links build on our .nav options with their own
              modifier class and require the use of toggler classes for proper
              responsive styling. Navigation in navbars will also grow to occupy
              as much horizontal space as possible to keep your navbar contents
              securely aligned.
            </h5>
            <div>
              <button type="button" className="btn btn-dark">
                Dark
              </button>
              <button type="button" className="btn btn-dark ms-4">
                Dark
              </button>
            </div>
          </div>
          <div className="col-md-6 my-5">
            <img className="landing-img" src="/images/macbook.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
