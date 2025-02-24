import React, { useEffect, useState } from "react";
import { Loader } from "../component/loader.js";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";
import { Resource } from "../component/Resource/Resource.js";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";

export const ResourcePage = () => {
  ReactGA.initialize("G-6WD5GM86HD");
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  const [loading, setLoading] = useState(true);
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
            <title>Useful Resources - Techsa Services Pvt. Ltd.</title>
            <meta
              name="description"
              content="We offer IT solutions that help businesses manage their IT infrastructure. It can help businesses with vulnerability remediation, asset inventory, and software metering."
            />
            <link href="/Resource" />
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
          <div className="resource">
            <Resource />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
