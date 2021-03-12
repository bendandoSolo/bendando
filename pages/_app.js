import "../styles/globals.css";

// Next Links
import Head from "next/head";

// Components
import Contact from "./components/Contact";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>BenDando</title>
        {/* MDB LINKS */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
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
      <Contact />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
