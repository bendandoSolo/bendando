import "../styles/globals.css";

// Next Links
import Head from "next/head";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        {/* MDB LINKS */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"
        ></script>
      </Head>

      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
