import React, { useEffect, useState } from "react";
import { NavBar } from "../component/NavBar";
import { Loader } from "../component/loader";
import { Footer } from "../component/Footer";
import { Solarwinds } from "./ProductPage/Solarwinds";
import { BigFix } from "./ProductPage/BigFix";
import { FreshWorks } from "./ProductPage/FreshWorks";
import { Tenable } from "./ProductPage/Tenable";
import { Armis } from "./ProductPage/Armis";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";

export const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  ReactGA.initialize("G-6WD5GM86HD");
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="App">
            <Helmet>
              <title>
                IT Monitoring, Cybersecurity Compliance & Vulnerability
                Management Software | Techsa Services Pvt. Ltd.
              </title>
              <meta
                name="description"
                content="We provide best solutions to manage IT infrastructure, secure endpoints, boost customer engagement with SolarWinds, BigFix, Freshworks, Tenable & Armis."
              />
              <link href="/Products" />
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
            <div className="ProductsPage">
              <Solarwinds />
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <BigFix />
              </div>
              {/* <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <FreshWorks />
              </div> */}
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <Armis />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <Tenable />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};
