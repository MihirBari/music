import React, { useState, useEffect } from "react";
import { NavBar } from "../component/NavBar";
import { Banner } from "../component/Banner";
import "../App.css";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";
import { About } from "../component/About/About";
import {AnimatedModalDemo}  from "../component/NewComponent/AnimatedModalDemo";


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  ReactGA.initialize("G-6WD5GM86HD");

  //  useEffect(() => {
  //     ReactGA.event({
  //     ReactGA.event({
  //       category: "your category",
  //       action: "your action",
  //       label: "your label",
  //     });
  //   }, []);

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
        <div className="App">
          <Helmet>
            <title>
              Network Security Software - IT Infrastructure & Database
              Monitoring Software | Techsa Services Pvt. Ltd.
            </title>
            <meta
              name="description"
              content="Safeguard your IT infrastructure with Techsa's Network Security, IT Infrastructure & Database Monitoring Software, we ensure global accessibility."
            />
            <link rel="canonical" href="/" />
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
          <Banner />
          <br />
          <br />
          {/* <div style={{display:"flex", flexDirection:"row",
            justifyContent:"space-around"}}>
          <AnimatedModalDemo />
          <AnimatedModalDemo1 />
          </div> */}
          <AnimatedModalDemo />
  
          <About />
          {/* <GeoLocationDisplay />
          <TechsaMap /> */}
          {/* <FloatingDockDemo /> */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
