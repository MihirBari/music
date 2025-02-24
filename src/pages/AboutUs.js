import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";
import { About } from "../component/About/About";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";

export const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  ReactGA.initialize("G-6WD5GM86HD");
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Helmet>
            <title>
              About Us - IT Management Solution Provider | Techsa Services Pvt.
              Ltd.
            </title>
            <meta
              name="description"
              content="We team up with industry-leading technology partners to deliver innovative solutions to our customers with top-quality products and services. Contact us today!"
            />
            <link href="/AboutUs" />
            <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Techsa Services Pvt. Ltd.",
            "url": "https://www.techsa.net/",
            "logo": "",
            "sameAs": "https://in.linkedin.com/company/techsa-services-pvt-ltd"
          }
        `}
      </script>
          </Helmet>

          <NavBar />
          <section>
            <div className="App">
              <About />
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};
