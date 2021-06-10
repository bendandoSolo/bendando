import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

// Next Links
import Head from "next/head";

// Components
import Contact from "../components/Contact";

// DATA AOS
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps, router }) {
  const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    //unimplement analytics boilerplate code
    nextRouter.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      nextRouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [nextRouter.events]);

  useEffect(() => {
    AOS.init();
  }, []);

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
      <Component {...pageProps} key={router.route} />
    </div>
  );
}

export default MyApp;
