import React, { useState, useEffect } from "react";
import { NavBar } from "../component/NavBar";
import { Banner } from "../component/Banner";
import "../App.css";
import { Footer } from "../component/Footer";
import { Loader } from "../component/loader";
import { About } from "../component/About/About";
import {AnimatedModalDemo}  from "../component/NewComponent/AnimatedModalDemo";


const HomePage = () => {
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
        <div className="App">
          <NavBar />
          <Banner />
          <AnimatedModalDemo />
          <About />

          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
